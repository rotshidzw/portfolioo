import { useMemo, useState } from 'react';
import Link from 'next/link';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const seedIncidents = [
  {
    id: 'INC-202',
    title: 'Queue backlog rising in telemetry pipeline',
    severity: 'Medium',
    status: 'Investigating',
  },
  {
    id: 'INC-199',
    title: 'Payment webhook timeouts',
    severity: 'High',
    status: 'Mitigating',
  },
  {
    id: 'INC-193',
    title: 'Cache warmup slower after deploy',
    severity: 'Low',
    status: 'Monitoring',
  },
];

const OpsConsole = () => {
  const [incidents, setIncidents] = useState(seedIncidents);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [note, setNote] = useState('');

  const filtered = useMemo(() => {
    return incidents.filter((incident) => {
      const matchesFilter = filter === 'All' || incident.severity === filter;
      const matchesSearch = incident.title.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [incidents, filter, search]);

  const acknowledgeIncident = (id) => {
    setIncidents((prev) =>
      prev.map((incident) =>
        incident.id === id ? { ...incident, status: 'Acknowledged' } : incident
      )
    );
  };

  const resolveIncident = (id) => {
    setIncidents((prev) => prev.filter((incident) => incident.id !== id));
  };

  const addIncident = () => {
    if (!note.trim()) return;
    setIncidents((prev) => [
      {
        id: `INC-${Math.floor(Math.random() * 900 + 100)}`,
        title: note.trim(),
        severity: 'Medium',
        status: 'Investigating',
      },
      ...prev,
    ]);
    setNote('');
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
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Ops Console</h1>
        <p className="text-white/70 max-w-3xl mb-8">
          A lightweight incident triage console. Filter by severity, add new reports, and resolve alerts as you stabilize
          systems.
        </p>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-emerald-400/40 rounded-xl p-6 bg-black/70">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-lg font-semibold">Incident Stream</h2>
              <div className="flex flex-wrap gap-2 text-xs">
                {['All', 'High', 'Medium', 'Low'].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setFilter(level)}
                    className={`border px-3 py-1 rounded-full uppercase tracking-wide transition ${
                      filter === level
                        ? 'border-emerald-300 text-emerald-200'
                        : 'border-white/20 text-white/70 hover:border-emerald-400'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search incidents..."
              className="mt-4 w-full rounded-md bg-black/70 border border-white/20 px-3 py-2 text-sm"
            />
            <div className="mt-4 space-y-3 text-sm">
              {filtered.length ? (
                filtered.map((incident) => (
                  <div key={incident.id} className="border-b border-white/10 pb-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-white/80">{incident.title}</p>
                        <p className="text-xs text-white/50">{incident.id} · {incident.severity}</p>
                      </div>
                      <span className="text-xs text-emerald-200">{incident.status}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => acknowledgeIncident(incident.id)}
                        className="border border-white/20 px-2 py-1 rounded-full text-xs uppercase tracking-wide hover:border-emerald-400"
                      >
                        Acknowledge
                      </button>
                      <button
                        type="button"
                        onClick={() => resolveIncident(incident.id)}
                        className="border border-emerald-400/60 px-2 py-1 rounded-full text-xs uppercase tracking-wide hover:bg-emerald-500/10"
                      >
                        Resolve
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white/60">No incidents match the current filter.</p>
              )}
            </div>
          </div>
          <div className="space-y-6">
            <div className="border border-white/10 rounded-xl p-4 bg-black/70">
              <p className="text-xs uppercase tracking-wide text-emerald-300">Active incidents</p>
              <p className="text-2xl font-bold mt-2">{incidents.length}</p>
            </div>
            <div className="border border-white/10 rounded-xl p-4 bg-black/70">
              <p className="text-xs uppercase tracking-wide text-emerald-300">Add incident</p>
              <textarea
                value={note}
                onChange={(event) => setNote(event.target.value)}
                rows={4}
                placeholder="Describe what you observed..."
                className="mt-3 w-full rounded-md bg-black/70 border border-white/20 px-3 py-2 text-sm"
              />
              <button
                type="button"
                onClick={addIncident}
                className="mt-3 border border-emerald-400 px-3 py-1 rounded-full text-xs uppercase tracking-wide hover:bg-emerald-500/10"
              >
                Log incident
              </button>
            </div>
            <div className="border border-white/10 rounded-xl p-4 bg-black/70">
              <p className="text-xs uppercase tracking-wide text-emerald-300">Next steps</p>
              <ul className="mt-3 space-y-2 text-xs text-white/70">
                <li>• Validate automated alerts against recent deploys.</li>
                <li>• Notify stakeholders if severity escalates.</li>
                <li>• Capture runbook updates once resolved.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OpsConsole;
