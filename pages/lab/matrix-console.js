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
  const [command, setCommand] = useState('');
  const [metrics, setMetrics] = useState({ latency: 38, uptime: 99.98 });

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index >= lines.length) {
        clearInterval(interval);
        return;
      }
      setOutput((prev) => [...prev, lines[index]]);
      index += 1;
    }, 700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        latency: Math.max(28, Math.min(120, prev.latency + (Math.random() * 10 - 5))),
        uptime: Math.max(99.5, Math.min(100, prev.uptime + (Math.random() * 0.02 - 0.01))),
      }));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const runCommand = () => {
    if (!command.trim()) return;
    const lower = command.trim().toLowerCase();
    let response = 'Command not recognized. Try: help, status, metrics, clear';

    if (lower === 'help') {
      response = 'Available commands: help, status, metrics, clear';
    }
    if (lower === 'status') {
      response = 'Status: All systems nominal. Telemetry streaming.';
    }
    if (lower === 'metrics') {
      response = `Latency ${metrics.latency.toFixed(0)}ms | Uptime ${metrics.uptime.toFixed(2)}%`;
    }
    if (lower === 'clear') {
      setOutput([]);
      setCommand('');
      return;
    }

    setOutput((prev) => [...prev, `> ${command}`, response]);
    setCommand('');
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixBackground />
      <TopNav />
      <main className="pt-28 px-6 pb-20 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Matrix Console</h1>
        <div className="rounded-xl border border-emerald-400/40 bg-black/80 p-6 font-mono text-sm space-y-2">
          {output.map((line, idx) => (
            <p key={`${line}-${idx}`} className="text-emerald-300">
              {typeof line === 'string' && line.startsWith('>') ? line : `> ${line ?? ''}`}
            </p>
          ))}
          <div className="flex items-center gap-2 text-white/70">
            <span>&gt;</span>
            <input
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              onKeyDown={(event) => (event.key === 'Enter' ? runCommand() : null)}
              className="bg-transparent border-none outline-none flex-1 text-emerald-200"
              placeholder="Type a command..."
            />
            <button
              type="button"
              onClick={runCommand}
              className="border border-emerald-400/50 px-2 py-1 rounded text-xs hover:border-emerald-300"
            >
              Run
            </button>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-white/10 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Latency</p>
            <p className="text-2xl font-bold mt-2">{metrics.latency.toFixed(0)} ms</p>
          </div>
          <div className="border border-white/10 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Uptime</p>
            <p className="text-2xl font-bold mt-2">{metrics.uptime.toFixed(2)}%</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MatrixConsole;
