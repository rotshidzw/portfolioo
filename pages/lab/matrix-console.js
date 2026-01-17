import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
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

const formatNumber = (value, suffix = '') => `${value.toLocaleString()}${suffix}`;

const baseCommandCatalog = [
  { cmd: 'help', description: 'List all available commands.' },
  { cmd: 'status', description: 'Show overall system status summary.' },
  { cmd: 'metrics', description: 'Display detailed performance metrics.' },
  { cmd: 'uptime', description: 'Show current uptime percentage.' },
  { cmd: 'latency', description: 'Show current API latency.' },
  { cmd: 'cpu', description: 'Show CPU usage snapshot.' },
  { cmd: 'memory', description: 'Show memory usage snapshot.' },
  { cmd: 'disk', description: 'Show storage usage snapshot.' },
  { cmd: 'services', description: 'List service health states.' },
  { cmd: 'alerts', description: 'List open alerts.' },
  { cmd: 'resolve <id>', description: 'Resolve an alert by ID.' },
  { cmd: 'trace', description: 'Trace a request path through services.' },
  { cmd: 'ping', description: 'Ping the edge gateway.' },
  { cmd: 'netstat', description: 'Show active network connections.' },
  { cmd: 'geo', description: 'Show active traffic regions.' },
  { cmd: 'weather', description: 'Return simulated data center weather.' },
  { cmd: 'banner', description: 'Print the lab banner.' },
  { cmd: 'inspire', description: 'Get a short inspiration line.' },
  { cmd: 'whoami', description: 'Reveal current operator handle.' },
  { cmd: 'hostname', description: 'Show active node hostname.' },
  { cmd: 'version', description: 'Show build version.' },
  { cmd: 'date', description: 'Show current date.' },
  { cmd: 'time', description: 'Show current time.' },
  { cmd: 'echo <text>', description: 'Echo a custom line back.' },
  { cmd: 'log', description: 'Tail the last three audit logs.' },
  { cmd: 'cache', description: 'Flush edge cache and report.' },
  { cmd: 'mode <normal|safe>', description: 'Toggle system mode.' },
  { cmd: 'restart <service>', description: 'Restart a named service.' },
  { cmd: 'deploy', description: 'Simulate a hotfix deployment.' },
  { cmd: 'scan', description: 'Run a quick security scan.' },
  { cmd: 'reboot', description: 'Simulate a reboot cycle.' },
  { cmd: 'shutdown', description: 'Simulate graceful shutdown.' },
  { cmd: 'clear', description: 'Clear console output.' },
];

const MatrixConsole = () => {
  const [output, setOutput] = useState([]);
  const [command, setCommand] = useState('');
  const [mode, setMode] = useState('normal');
  const [metrics, setMetrics] = useState({
    latency: 38,
    uptime: 99.98,
    cpu: 42,
    memory: 68,
    disk: 71,
    requests: 12840,
    errorRate: 0.14,
  });
  const [services, setServices] = useState([
    { name: 'Auth Gateway', status: 'Online' },
    { name: 'API Cluster', status: 'Online' },
    { name: 'DB Replica', status: 'Degraded' },
    { name: 'Telemetry', status: 'Online' },
    { name: 'Edge Cache', status: 'Online' },
  ]);
  const [alerts, setAlerts] = useState([
    { id: 'AL-3921', label: 'Suspicious login burst', severity: 'High' },
    { id: 'AL-3904', label: 'API error spike', severity: 'Medium' },
    { id: 'AL-3899', label: 'Firewall policy drift', severity: 'Low' },
  ]);

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
        cpu: Math.max(18, Math.min(95, prev.cpu + (Math.random() * 12 - 6))),
        memory: Math.max(42, Math.min(96, prev.memory + (Math.random() * 8 - 4))),
        disk: Math.max(40, Math.min(90, prev.disk + (Math.random() * 4 - 2))),
        requests: Math.max(11000, Math.round(prev.requests + (Math.random() * 400 - 200))),
        errorRate: Math.max(0.02, Math.min(1, prev.errorRate + (Math.random() * 0.08 - 0.04))),
      }));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const commandCatalog = useMemo(() => baseCommandCatalog, []);

  const appendOutput = (linesToAdd) => {
    const normalized = Array.isArray(linesToAdd) ? linesToAdd : [linesToAdd];
    setOutput((prev) => [...prev, ...normalized]);
  };

  const runCommand = () => {
    if (!command.trim()) return;
    const rawCommand = command.trim();
    const [cmd, ...rest] = rawCommand.split(' ');
    const lower = cmd.toLowerCase();
    const args = rest.join(' ');
    const timestamp = new Date();

    if (lower === 'clear') {
      setOutput([]);
      setCommand('');
      return;
    }

    let responseLines = [];

    switch (lower) {
      case 'help':
        responseLines = [
          'Available commands:',
          ...commandCatalog.map((item) => `- ${item.cmd}: ${item.description}`),
        ];
        break;
      case 'status':
        responseLines = [
          `Mode: ${mode.toUpperCase()} | Alerts: ${alerts.length} | Services: ${services.length} online`,
          'All core systems nominal. Monitoring continues.',
        ];
        break;
      case 'metrics':
        responseLines = [
          `Latency: ${metrics.latency.toFixed(0)}ms`,
          `Uptime: ${metrics.uptime.toFixed(2)}%`,
          `CPU: ${metrics.cpu.toFixed(0)}%`,
          `Memory: ${metrics.memory.toFixed(0)}%`,
          `Disk: ${metrics.disk.toFixed(0)}%`,
          `Requests/min: ${formatNumber(metrics.requests)}`,
          `Error rate: ${metrics.errorRate.toFixed(2)}%`,
        ];
        break;
      case 'uptime':
        responseLines = [`${metrics.uptime.toFixed(2)}% uptime across last 24h.`];
        break;
      case 'latency':
        responseLines = [`API latency averaging ${metrics.latency.toFixed(0)}ms.`];
        break;
      case 'cpu':
        responseLines = [`CPU load steady at ${metrics.cpu.toFixed(0)}%.`];
        break;
      case 'memory':
        responseLines = [`Memory footprint ${metrics.memory.toFixed(0)}% utilized.`];
        break;
      case 'disk':
        responseLines = [`Disk usage ${metrics.disk.toFixed(0)}%. Backup window clear.`];
        break;
      case 'services':
        responseLines = services.map((service) => `${service.name}: ${service.status}`);
        break;
      case 'alerts':
        responseLines = alerts.length
          ? alerts.map((alert) => `${alert.id} [${alert.severity}] ${alert.label}`)
          : ['No open alerts.'];
        break;
      case 'resolve':
        if (!args) {
          responseLines = ['Usage: resolve <id>'];
          break;
        }
        setAlerts((prev) => prev.filter((alert) => alert.id.toLowerCase() !== args.toLowerCase()));
        responseLines = [`Alert ${args.toUpperCase()} marked resolved.`];
        break;
      case 'trace':
        responseLines = [
          'Trace route:',
          'edge-gw → auth-service → api-cluster → db-replica',
          'End-to-end latency 104ms.',
        ];
        break;
      case 'ping':
        responseLines = ['Pinging edge-gw... 12ms avg, 0% packet loss.'];
        break;
      case 'netstat':
        responseLines = [
          'Active connections: 482',
          'Top protocols: HTTPS 72%, WSS 18%, SSH 10%',
        ];
        break;
      case 'geo':
        responseLines = ['Active regions: JHB (42%), CPT (28%), LON (18%), NYC (12%)'];
        break;
      case 'weather':
        responseLines = ['Data center weather: 18°C, clear skies, humidity 35%.'];
        break;
      case 'banner':
        responseLines = ['CH3ST3R // DEV LAB', 'Keep shipping. Keep learning.'];
        break;
      case 'inspire':
        responseLines = ['Small improvements, daily. That is the compounding edge.'];
        break;
      case 'whoami':
        responseLines = ['operator: chester.root'];
        break;
      case 'hostname':
        responseLines = ['node: lab-node-07'];
        break;
      case 'version':
        responseLines = ['build: v2.4.8-lab'];
        break;
      case 'date':
        responseLines = [timestamp.toLocaleDateString()];
        break;
      case 'time':
        responseLines = [timestamp.toLocaleTimeString()];
        break;
      case 'echo':
        responseLines = [args || '...'];
        break;
      case 'log':
        responseLines = [
          '14:01Z deploy: hotfix auth header check',
          '14:09Z scale: api-cluster +2',
          '14:12Z audit: policy override reviewed',
        ];
        break;
      case 'cache':
        responseLines = ['Edge cache flushed. Hit rate expected to normalize in 3m.'];
        break;
      case 'mode':
        if (args.toLowerCase() !== 'safe' && args.toLowerCase() !== 'normal') {
          responseLines = ['Usage: mode <normal|safe>'];
        } else {
          setMode(args.toLowerCase());
          responseLines = [`Mode set to ${args.toUpperCase()}.`];
        }
        break;
      case 'restart':
        if (!args) {
          responseLines = ['Usage: restart <service>'];
          break;
        }
        setServices((prev) =>
          prev.map((service) =>
            service.name.toLowerCase().includes(args.toLowerCase())
              ? { ...service, status: 'Online' }
              : service
          )
        );
        responseLines = [`Restarting ${args}... OK.`];
        break;
      case 'deploy':
        responseLines = ['Deploying hotfix... 42%... 88%... complete.'];
        break;
      case 'scan':
        responseLines = ['Security scan running... 0 critical, 1 medium, 3 low.'];
        break;
      case 'reboot':
        responseLines = ['Reboot queued. Session will auto-resume in 12s.'];
        break;
      case 'shutdown':
        responseLines = ['Graceful shutdown queued. Ensure backups are complete.'];
        break;
      default:
        responseLines = [`Command not recognized. Type 'help' to see the list.`];
    }

    appendOutput([`> ${rawCommand}`, ...responseLines]);
    setCommand('');
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixBackground />
      <TopNav />
      <main className="pt-28 px-6 pb-20 max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-emerald-200/80 hover:text-emerald-200"
          >
            <span aria-hidden="true">←</span>
            Back to Dev Lab
          </Link>
        </div>
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
            <p className="text-xs text-white/60 mt-2">Mode: {mode.toUpperCase()}</p>
          </div>
          <div className="border border-white/10 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Uptime</p>
            <p className="text-2xl font-bold mt-2">{metrics.uptime.toFixed(2)}%</p>
            <p className="text-xs text-white/60 mt-2">Requests/min: {formatNumber(metrics.requests)}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MatrixConsole;
