import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const metrics = [
  { label: 'Devices processed', value: '1,240' },
  { label: 'Recovered components', value: '3,480' },
  { label: 'Community partners', value: '12' },
  { label: 'CO₂ offset (kg)', value: '8,540' },
];

const EwasteDashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixBackground />
      <TopNav />
      <main className="pt-28 px-6 pb-20 max-w-6xl mx-auto">
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
        <div className="mt-10 border border-emerald-400/40 rounded-xl p-6 bg-black/70">
          <h2 className="text-xl font-semibold mb-3">Notes</h2>
          <ul className="text-sm text-white/70 space-y-2">
            <li>• Focus on sustainable hardware reuse and local partner enablement.</li>
            <li>• Reporting dashboards help align engineering work with measurable impact.</li>
            <li>• Pipeline ready for real-time data ingestion when connected to sensors.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default EwasteDashboard;
