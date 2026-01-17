import { useMemo, useState } from 'react';
import Link from 'next/link';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const seedAlerts = [
  { id: 'AL-3921', label: 'Suspicious login burst', status: 'High', source: 'Auth' },
  { id: 'AL-3904', label: 'API error spike', status: 'Medium', source: 'API' },
  { id: 'AL-3899', label: 'Firewall policy drift', status: 'Low', source: 'Network' },
];

const SplunkSnapshot = () => {
  const [alerts, setAlerts] = useState(seedAlerts);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [acknowledged, setAcknowledged] = useState([]);

  const visibleAlerts = useMemo(() => {
    return alerts.filter((alert) => {
      const matchesFilter = filter === 'All' || alert.status === filter;
      const matchesSearch = alert.label.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [alerts, filter, search]);

  const acknowledgeAlert = (id) => {
    setAcknowledged((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const resolveAlert = (id) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  const simulateAlert = () => {
    const nextId = `AL-${Math.floor(Math.random() * 9000 + 1000)}`;
    setAlerts((prev) => [
      {
        id: nextId,
        label: 'Unexpected privilege escalation',
        status: 'High',
        source: 'IAM',
      },
      ...prev,
    ]);
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
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Splunk Snapshot</h1>
        <p className="text-white/70 max-w-3xl mb-8">
          A security analytics view inspired by Splunk dashboards. Filter, acknowledge, and resolve alerts as if you were
          on shift.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-white/10 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Events / min</p>
            <p className="text-2xl font-bold mt-2">12,840</p>
          </div>
          <div className="border border-white/10 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Active Signals</p>
            <p className="text-2xl font-bold mt-2">{alerts.length}</p>
          </div>
          <div className="border border-white/10 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Threat Score</p>
            <p className="text-2xl font-bold mt-2">72</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-emerald-400/40 rounded-xl p-6 bg-black/70">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h2 className="text-lg font-semibold">Alert Stream</h2>
              <button
                type="button"
                onClick={simulateAlert}
                className="border border-emerald-400 px-3 py-1 rounded-full text-xs uppercase tracking-wide hover:bg-emerald-500/10"
              >
                Simulate Alert
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mb-4 text-xs">
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
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search alerts..."
              className="w-full rounded-md bg-black/70 border border-white/20 px-3 py-2 text-sm"
            />
            <div className="mt-4 space-y-3 text-sm">
              {visibleAlerts.length ? (
                visibleAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between gap-3 border-b border-white/10 pb-2">
                    <div>
                      <p className="text-white/80">{alert.label}</p>
                      <p className="text-xs text-white/50">{alert.id} · {alert.source}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span
                        className={
                          alert.status === 'High'
                            ? 'text-red-300'
                            : alert.status === 'Medium'
                              ? 'text-yellow-300'
                              : 'text-emerald-300'
                        }
                      >
                        {alert.status}
                      </span>
                      <button
                        type="button"
                        onClick={() => acknowledgeAlert(alert.id)}
                        className="border border-white/20 px-2 py-1 rounded-full text-xs uppercase tracking-wide hover:border-emerald-400"
                      >
                        {acknowledged.includes(alert.id) ? 'Acked' : 'Ack'}
                      </button>
                      <button
                        type="button"
                        onClick={() => resolveAlert(alert.id)}
                        className="border border-emerald-400/60 px-2 py-1 rounded-full text-xs uppercase tracking-wide hover:bg-emerald-500/10"
                      >
                        Resolve
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white/60">No alerts match your filter.</p>
              )}
            </div>
          </div>
          <div className="space-y-6">
            <div className="border border-white/10 rounded-xl p-4 bg-black/70">
              <p className="text-xs uppercase tracking-wide text-emerald-300">Acknowledged</p>
              <p className="text-2xl font-bold mt-2">{acknowledged.length}</p>
              <p className="text-xs text-white/60 mt-2">Tracked for follow-up in the incident log.</p>
            </div>
            <div className="border border-white/10 rounded-xl p-4 bg-black/70">
              <p className="text-xs uppercase tracking-wide text-emerald-300">Next Actions</p>
              <ul className="mt-3 space-y-2 text-xs text-white/70">
                <li>• Verify MFA policy compliance on Auth Gateway.</li>
                <li>• Triage API error spike logs for client regressions.</li>
                <li>• Schedule firewall review with security ops.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SplunkSnapshot;
