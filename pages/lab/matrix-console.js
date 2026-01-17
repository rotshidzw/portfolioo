import { useEffect, useState } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const lines = [
  'Initializing Chester Dev Console...',
  'Loading modules: ui-core, analytics, backend-gateway',
  'Connecting to lab node [OK]',
  'Streaming telemetry...',
  'Diagnostics: latency 38ms, uptime 99.98%',
  'Ready for input. Awaiting commands.',
];

const MatrixConsole = () => {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setOutput((prev) => [...prev, lines[index]]);
      index += 1;
      if (index >= lines.length) {
        clearInterval(interval);
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixBackground />
      <TopNav />
      <main className="pt-28 px-6 pb-20 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Matrix Console</h1>
        <div className="rounded-xl border border-emerald-400/40 bg-black/80 p-6 font-mono text-sm space-y-2">
          {output.map((line, idx) => (
            <p key={`${line}-${idx}`} className="text-emerald-300">
              &gt; {line}
            </p>
          ))}
          <p className="text-white/60">&gt; _</p>
        </div>
      </main>
    </div>
  );
};

export default MatrixConsole;
