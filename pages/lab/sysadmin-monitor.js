import { useEffect, useState } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const services = [
  { name: 'Auth Gateway', status: 'Online' },
  { name: 'API Cluster', status: 'Online' },
  { name: 'DB Replica', status: 'Degraded' },
  { name: 'Telemetry', status: 'Online' },
];

const SysAdminMonitor = () => {
  const [uptime, setUptime] = useState(99.98);
  const [latency, setLatency] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => Math.max(28, Math.min(120, prev + (Math.random() * 12 - 6))));
      setUptime((prev) => Math.max(99.5, Math.min(100, prev + (Math.random() * 0.02 - 0.01))));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixBackground />
      <TopNav />
      <main className="pt-28 px-6 pb-20 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">SysAdmin Monitor</h1>
        <p className="text-white/70 max-w-2xl mb-8">
          Live system overview with service health, uptime, and latency signals.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-emerald-400/40 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Uptime</p>
            <p className="text-2xl font-bold mt-2">{uptime.toFixed(2)}%</p>
          </div>
          <div className="border border-emerald-400/40 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Latency</p>
            <p className="text-2xl font-bold mt-2">{Math.round(latency)} ms</p>
          </div>
          <div className="border border-emerald-400/40 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Active Alerts</p>
            <p className="text-2xl font-bold mt-2">1</p>
          </div>
        </div>
        <div className="mt-8 border border-white/10 rounded-xl p-6 bg-black/70">
          <h2 className="text-lg font-semibold mb-4">Service Status</h2>
          <ul className="space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.name} className="flex justify-between">
                <span>{service.name}</span>
                <span className={service.status === 'Online' ? 'text-emerald-300' : 'text-yellow-300'}>
                  {service.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default SysAdminMonitor;
