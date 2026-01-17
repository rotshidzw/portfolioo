import { useState } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const AiPrompter = () => {
  const [role, setRole] = useState('Senior Front-End Engineer');
  const [task, setTask] = useState('Design a responsive dashboard');
  const [constraints, setConstraints] = useState('Use Next.js + Tailwind, no heavy UI frameworks');

  const prompt = `Role: ${role}\nTask: ${task}\nConstraints: ${constraints}`;

  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixBackground />
      <TopNav />
      <main className="pt-28 px-6 pb-20 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">AI Prompter</h1>
        <p className="text-white/70 max-w-2xl mb-8">
          A prompt builder UI I use to structure technical requests for AI copilots and internal tooling.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
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
              Constraints
              <textarea
                value={constraints}
                onChange={(event) => setConstraints(event.target.value)}
                rows={4}
                className="mt-2 w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
              />
            </label>
          </div>
          <div className="border border-emerald-400/40 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Generated Prompt</p>
            <pre className="mt-4 text-sm whitespace-pre-wrap text-white/80">{prompt}</pre>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AiPrompter;
