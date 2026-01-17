import { useMemo, useState } from 'react';
import Link from 'next/link';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const promptPresets = [
  {
    label: 'SysAdmin Fix Plan',
    role: 'Site Reliability Engineer',
    task: 'Stabilize a degraded DB replica and document the remediation plan',
    constraints: 'Provide steps, scripts, and rollback plan. Keep response under 12 bullets.',
    tone: 'Crisp, operational',
    format: 'Checklist',
  },
  {
    label: 'Recruiter Summary',
    role: 'Senior Full Stack Developer',
    task: 'Summarize recent work for a recruiter in 6 bullet points',
    constraints: 'Highlight impact, metrics, and stack choices. Keep tone friendly.',
    tone: 'Confident, warm',
    format: 'Bulleted summary',
  },
  {
    label: 'Incident Report',
    role: 'Security Analyst',
    task: 'Draft a post-incident report for a suspicious login burst',
    constraints: 'Include timeline, root cause, mitigations, and follow-up tasks.',
    tone: 'Formal',
    format: 'Report',
  },
];

const suggestions = {
  roles: ['Platform Engineer', 'Security Analyst', 'Product Designer', 'DevOps Lead', 'Data Analyst'],
  tasks: [
    'Design a multi-tenant monitoring dashboard',
    'Plan a safe database migration',
    'Create a go-to-market landing page',
    'Document the incident response workflow',
  ],
  constraints: [
    'Use concise bullet points',
    'Include risks + mitigations',
    'Provide acceptance criteria',
    'Keep it under 200 words',
  ],
  formats: ['Checklist', 'One-pager', 'Email', 'Runbook', 'Step-by-step'],
  tones: ['Calm', 'Direct', 'Strategic', 'Curious', 'Executive'],
};

const AiPrompter = () => {
  const [role, setRole] = useState('Senior Front-End Engineer');
  const [task, setTask] = useState('Design a responsive dashboard');
  const [constraints, setConstraints] = useState('Use Next.js + Tailwind, no heavy UI frameworks');
  const [tone, setTone] = useState('Clear & confident');
  const [format, setFormat] = useState('Bulleted plan');
  const [audience, setAudience] = useState('Recruiting manager');
  const [success, setSuccess] = useState('Measurable impact, clear deliverables, and trade-offs.');
  const [risks, setRisks] = useState('Timeline risk, integration dependencies, and accessibility compliance.');

  const prompt = useMemo(
    () =>
      [
        `Role: ${role}`,
        `Task: ${task}`,
        `Audience: ${audience}`,
        `Tone: ${tone}`,
        `Format: ${format}`,
        `Constraints: ${constraints}`,
        `Success Criteria: ${success}`,
        `Risks to watch: ${risks}`,
      ].join('\n'),
    [role, task, audience, tone, format, constraints, success, risks]
  );

  const completenessScore = useMemo(() => {
    const fields = [role, task, constraints, tone, format, audience, success, risks];
    const filled = fields.filter((field) => field.trim().length > 4).length;
    return Math.round((filled / fields.length) * 100);
  }, [role, task, constraints, tone, format, audience, success, risks]);

  const applyPreset = (preset) => {
    setRole(preset.role);
    setTask(preset.task);
    setConstraints(preset.constraints);
    setTone(preset.tone);
    setFormat(preset.format);
  };

  const copyPrompt = async () => {
    if (!navigator?.clipboard) return;
    await navigator.clipboard.writeText(prompt);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixBackground />
      <TopNav />
      <main className="pt-28 px-6 pb-20 max-w-6xl mx-auto">
        <div className="mb-6">
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-emerald-200/80 hover:text-emerald-200"
          >
            <span aria-hidden="true">←</span>
            Back to Dev Lab
          </Link>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">AI Prompter</h1>
        <p className="text-white/70 max-w-2xl mb-8">
          Build detailed prompts with roles, constraints, and success criteria. This helps me communicate clear specs to AI
          copilots and teammates.
        </p>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <label className="block text-sm">
              Role
              <input
                value={role}
                onChange={(event) => setRole(event.target.value)}
                className="mt-2 w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              Task
              <input
                value={task}
                onChange={(event) => setTask(event.target.value)}
                className="mt-2 w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              Audience
              <input
                value={audience}
                onChange={(event) => setAudience(event.target.value)}
                className="mt-2 w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
              />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm">
                Tone
                <input
                  value={tone}
                  onChange={(event) => setTone(event.target.value)}
                  className="mt-2 w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
                />
              </label>
              <label className="block text-sm">
                Format
                <input
                  value={format}
                  onChange={(event) => setFormat(event.target.value)}
                  className="mt-2 w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
                />
              </label>
            </div>
            <label className="block text-sm">
              Constraints
              <textarea
                value={constraints}
                onChange={(event) => setConstraints(event.target.value)}
                rows={4}
                className="mt-2 w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              Success criteria
              <textarea
                value={success}
                onChange={(event) => setSuccess(event.target.value)}
                rows={3}
                className="mt-2 w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              Risks & safeguards
              <textarea
                value={risks}
                onChange={(event) => setRisks(event.target.value)}
                rows={3}
                className="mt-2 w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
              />
            </label>
          </div>
          <div className="space-y-6">
            <div className="border border-emerald-400/40 rounded-xl p-4 bg-black/70">
              <p className="text-xs uppercase tracking-wide text-emerald-300">Generated Prompt</p>
              <pre className="mt-4 text-sm whitespace-pre-wrap text-white/80">{prompt}</pre>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={copyPrompt}
                  className="border border-emerald-400 px-3 py-1 rounded-full text-xs uppercase tracking-wide hover:bg-emerald-500/10 transition"
                >
                  Copy Prompt
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset(promptPresets[0])}
                  className="border border-white/20 px-3 py-1 rounded-full text-xs uppercase tracking-wide hover:border-emerald-400 transition"
                >
                  Use SysAdmin preset
                </button>
              </div>
            </div>
            <div className="border border-white/10 rounded-xl p-4 bg-black/70">
              <p className="text-xs uppercase tracking-wide text-emerald-300">Prompt readiness</p>
              <p className="text-2xl font-bold mt-2">{completenessScore}%</p>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-emerald-400" style={{ width: `${completenessScore}%` }} />
              </div>
            </div>
            <div className="border border-white/10 rounded-xl p-4 bg-black/70 space-y-4">
              <p className="text-xs uppercase tracking-wide text-emerald-300">Quick suggestions</p>
              <div className="space-y-3 text-xs">
                <div className="flex flex-wrap gap-2">
                  {suggestions.roles.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setRole(item)}
                      className="border border-white/20 px-2 py-1 rounded-full hover:border-emerald-400 transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestions.tasks.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTask(item)}
                      className="border border-white/20 px-2 py-1 rounded-full hover:border-emerald-400 transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestions.constraints.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setConstraints((prev) => `${prev}${prev ? '; ' : ''}${item}`)}
                      className="border border-white/20 px-2 py-1 rounded-full hover:border-emerald-400 transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestions.tones.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTone(item)}
                      className="border border-white/20 px-2 py-1 rounded-full hover:border-emerald-400 transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestions.formats.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFormat(item)}
                      className="border border-white/20 px-2 py-1 rounded-full hover:border-emerald-400 transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="border border-white/10 rounded-xl p-4 bg-black/70">
              <p className="text-xs uppercase tracking-wide text-emerald-300">Preset library</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {promptPresets.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => applyPreset(preset)}
                    className="border border-white/20 px-3 py-1 rounded-full text-xs uppercase tracking-wide hover:border-emerald-400 transition"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AiPrompter;
