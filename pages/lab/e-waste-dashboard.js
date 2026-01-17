import { useState } from 'react';
import Link from 'next/link';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const metrics = [
  { label: 'Devices processed', value: '1,240' },
  { label: 'Recovered components', value: '3,480' },
  { label: 'Community partners', value: '12' },
  { label: 'CO₂ offset (kg)', value: '8,540' },
];

const EwasteDashboard = () => {
  const [pickup, setPickup] = useState({ location: '', devices: '', partner: '' });
  const [entries, setEntries] = useState([
    { id: 'EW-103', location: 'Midrand Lab', devices: 24, partner: 'GreenCycle', date: 'Today' },
    { id: 'EW-102', location: 'Sandton', devices: 12, partner: 'Reuse SA', date: 'Yesterday' },
  ]);
  const [reportStatus, setReportStatus] = useState('Ready');

  const submitPickup = (event) => {
    event.preventDefault();
    if (!pickup.location || !pickup.devices || !pickup.partner) return;
    setEntries((prev) => [
      {
        id: `EW-${Math.floor(Math.random() * 900 + 100)}`,
        location: pickup.location,
        devices: pickup.devices,
        partner: pickup.partner,
        date: 'Just now',
      },
      ...prev,
    ]);
    setPickup({ location: '', devices: '', partner: '' });
  };

  const generateReport = () => {
    setReportStatus('Generating...');
    setTimeout(() => setReportStatus('Impact report ready for export.'), 600);
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
        <h1 className="text-3xl md:text-5xl font-bold mb-4">E-Waste Impact Dashboard</h1>
        <p className="text-white/70 max-w-3xl mb-10">
          A snapshot of the systems and reporting mindset I bring to ICT and e-waste initiatives. These are example metrics
          that map to the projects I support.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="border border-white/10 rounded-xl p-4 bg-black/70">
              <p className="text-xs uppercase tracking-wide text-emerald-300">{metric.label}</p>
              <p className="text-2xl font-bold mt-2">{metric.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={submitPickup} className="border border-emerald-400/40 rounded-xl p-6 bg-black/70">
            <h2 className="text-xl font-semibold mb-3">Log a pickup</h2>
            <p className="text-sm text-white/70 mb-4">Capture collection details so impact reporting stays current.</p>
            <div className="grid gap-4">
              <label className="text-sm">
                Location
                <input
                  value={pickup.location}
                  onChange={(event) => setPickup((prev) => ({ ...prev, location: event.target.value }))}
                  className="mt-2 w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
                />
              </label>
              <label className="text-sm">
                Devices collected
                <input
                  type="number"
                  value={pickup.devices}
                  onChange={(event) => setPickup((prev) => ({ ...prev, devices: event.target.value }))}
                  className="mt-2 w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
                />
              </label>
              <label className="text-sm">
                Partner
                <input
                  value={pickup.partner}
                  onChange={(event) => setPickup((prev) => ({ ...prev, partner: event.target.value }))}
                  className="mt-2 w-full rounded-md bg-black/70 border border-white/20 px-3 py-2"
                />
              </label>
              <button
                type="submit"
                className="border border-emerald-400 px-4 py-2 rounded-full text-xs uppercase tracking-wide hover:bg-emerald-500/10 transition"
              >
                Add pickup
              </button>
            </div>
          </form>
          <div className="border border-white/10 rounded-xl p-6 bg-black/70">
            <h2 className="text-xl font-semibold mb-3">Recent entries</h2>
            <ul className="space-y-3 text-sm">
              {entries.map((entry) => (
                <li key={entry.id} className="border-b border-white/10 pb-3">
                  <p className="text-white/80">{entry.location} · {entry.devices} devices</p>
                  <p className="text-xs text-white/50">{entry.partner} · {entry.date} · {entry.id}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button
                type="button"
                onClick={generateReport}
                className="border border-white/20 px-4 py-2 rounded-full text-xs uppercase tracking-wide hover:border-emerald-400 transition"
              >
                Generate impact report
              </button>
              <p className="mt-3 text-xs text-white/60">{reportStatus}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EwasteDashboard;
