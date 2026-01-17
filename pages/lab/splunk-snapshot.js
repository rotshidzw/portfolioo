import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const alerts = [
  { id: 'AL-3921', label: 'Suspicious login burst', status: 'High' },
  { id: 'AL-3904', label: 'API error spike', status: 'Medium' },
  { id: 'AL-3899', label: 'Firewall policy drift', status: 'Low' },
];

const SplunkSnapshot = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixBackground />
      <TopNav />
      <main className="pt-28 px-6 pb-20 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Splunk Snapshot</h1>
        <p className="text-white/70 max-w-3xl mb-8">
          A security analytics view inspired by Splunk dashboards. Highlights real-time insights and operational health.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-white/10 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Events / min</p>
            <p className="text-2xl font-bold mt-2">12,840</p>
          </div>
          <div className="border border-white/10 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Active Signals</p>
            <p className="text-2xl font-bold mt-2">18</p>
          </div>
          <div className="border border-white/10 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Threat Score</p>
            <p className="text-2xl font-bold mt-2">72</p>
          </div>
        </div>
        <div className="mt-8 border border-emerald-400/40 rounded-xl p-6 bg-black/70">
          <h2 className="text-lg font-semibold mb-4">Alert Stream</h2>
          <div className="space-y-3 text-sm">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between border-b border-white/10 pb-2">
                <div>
                  <p className="text-white/80">{alert.label}</p>
                  <p className="text-xs text-white/50">{alert.id}</p>
                </div>
                <span className={alert.status === 'High' ? 'text-red-300' : alert.status === 'Medium' ? 'text-yellow-300' : 'text-emerald-300'}>
                  {alert.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SplunkSnapshot;
