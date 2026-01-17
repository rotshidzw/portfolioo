import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const initialServices = [
  { name: 'Auth Gateway', status: 'Online', owner: 'security' },
  { name: 'API Cluster', status: 'Online', owner: 'platform' },
  { name: 'DB Replica', status: 'Degraded', owner: 'data' },
  { name: 'Telemetry', status: 'Online', owner: 'ops' },
];

const baseCommandCatalog = [
  { cmd: 'help', description: 'List available commands.' },
  { cmd: 'status', description: 'Summarize uptime, latency, and alerts.' },
  { cmd: 'services', description: 'List service health.' },
  { cmd: 'restart <service>', description: 'Restart a named service.' },
  { cmd: 'maintenance <service>', description: 'Toggle maintenance mode.' },
  { cmd: 'resolve <id>', description: 'Resolve an alert by ID.' },
  { cmd: 'healthcheck', description: 'Run a quick health check.' },
  { cmd: 'simulate', description: 'Simulate a new incident.' },
  { cmd: 'df', description: 'Show disk usage snapshot.' },
  { cmd: 'free', description: 'Show memory usage snapshot.' },
  { cmd: 'top', description: 'Show CPU load snapshot.' },
  { cmd: 'clear', description: 'Clear console output.' },
];

const SysAdminMonitor = () => {
  const [uptime, setUptime] = useState(99.98);
  const [latency, setLatency] = useState(42);
  const [services, setServices] = useState(initialServices);
  const [alerts, setAlerts] = useState([
    { id: 'AL-221', message: 'DB replica lag above 2s', severity: 'High' },
  ]);
  const [actionLog, setActionLog] = useState([]);
  const [consoleOutput, setConsoleOutput] = useState([
    'sysadmin@lab:~$ status',
    'Uptime 99.98% · Latency 42ms · Alerts 1',
  ]);
  const [consoleInput, setConsoleInput] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => Math.max(28, Math.min(120, prev + (Math.random() * 12 - 6))));
      setUptime((prev) => Math.max(99.5, Math.min(100, prev + (Math.random() * 0.02 - 0.01))));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const commandCatalog = useMemo(() => baseCommandCatalog, []);

  const logAction = (message) => {
    setActionLog((prev) => [{ message, time: new Date().toLocaleTimeString() }, ...prev].slice(0, 6));
  };

  const restartService = (name) => {
    setServices((prev) => prev.map((service) => (service.name === name ? { ...service, status: 'Online' } : service)));
    logAction(`Restarted ${name}`);
  };

  const toggleMaintenance = (name) => {
    setServices((prev) =>
      prev.map((service) =>
        service.name === name
          ? { ...service, status: service.status === 'Maintenance' ? 'Online' : 'Maintenance' }
          : service
      )
    );
    logAction(`Toggled maintenance for ${name}`);
  };

  const resolveAlert = (id) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    logAction(`Resolved alert ${id}`);
  };

  const simulateIncident = () => {
    const target = services[Math.floor(Math.random() * services.length)];
    setServices((prev) =>
      prev.map((service) => (service.name === target.name ? { ...service, status: 'Degraded' } : service))
    );
    setAlerts((prev) => [
      { id: `AL-${Math.floor(Math.random() * 900 + 100)}`, message: `${target.name} latency spike`, severity: 'Medium' },
      ...prev,
    ]);
    logAction(`Incident simulated on ${target.name}`);
  };

  const runHealthCheck = () => {
    setServices((prev) =>
      prev.map((service) =>
        service.status === 'Degraded' ? { ...service, status: Math.random() > 0.5 ? 'Online' : 'Degraded' } : service
      )
    );
    logAction('Health check completed');
  };

  const appendConsole = (lines) => {
    const normalized = Array.isArray(lines) ? lines : [lines];
    setConsoleOutput((prev) => [...prev, ...normalized]);
  };

  const runConsoleCommand = () => {
    if (!consoleInput.trim()) return;
    const raw = consoleInput.trim();
    const parts = raw.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    if (command === 'clear') {
      setConsoleOutput([]);
      setConsoleInput('');
      return;
    }

    let responseLines = [];

    switch (command) {
      case 'help':
        responseLines = [
          'Available commands:',
          ...commandCatalog.map((item) => `- ${item.cmd}: ${item.description}`),
        ];
        break;
      case 'status':
        responseLines = [`Uptime ${uptime.toFixed(2)}% · Latency ${Math.round(latency)}ms · Alerts ${alerts.length}`];
        break;
      case 'services':
        responseLines = services.map((service) => `${service.name}: ${service.status}`);
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
        responseLines = [`Restarting ${args}... OK`];
        break;
      case 'maintenance':
        if (!args) {
          responseLines = ['Usage: maintenance <service>'];
          break;
        }
        setServices((prev) =>
          prev.map((service) =>
            service.name.toLowerCase().includes(args.toLowerCase())
              ? { ...service, status: service.status === 'Maintenance' ? 'Online' : 'Maintenance' }
              : service
          )
        );
        responseLines = [`Toggled maintenance for ${args}.`];
        break;
      case 'resolve':
        if (!args) {
          responseLines = ['Usage: resolve <id>'];
          break;
        }
        setAlerts((prev) => prev.filter((alert) => alert.id.toLowerCase() !== args.toLowerCase()));
        responseLines = [`Alert ${args.toUpperCase()} resolved.`];
        break;
      case 'healthcheck':
        runHealthCheck();
        responseLines = ['Health check completed.'];
        break;
      case 'simulate':
        simulateIncident();
        responseLines = ['Incident injected into service mesh.'];
        break;
      case 'df':
        responseLines = ['Filesystem /dev/sda1 71% used · /var 58% used'];
        break;
      case 'free':
        responseLines = ['Memory 68% used · Swap 3% used'];
        break;
      case 'top':
        responseLines = ['CPU load 0.74 · 1.02 · 0.88 (1m/5m/15m)'];
        break;
      default:
        responseLines = ['Command not recognized. Type help for options.'];
    }

    appendConsole([`sysadmin@lab:~$ ${raw}`, ...responseLines]);
    setConsoleInput('');
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
        <h1 className="text-3xl md:text-5xl font-bold mb-4">SysAdmin Monitor</h1>
        <p className="text-white/70 max-w-2xl mb-8">
          Live system overview with service health, uptime, and operator actions. Use the controls or the console to
          remediate issues and keep the stack stable.
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
            <p className="text-2xl font-bold mt-2">{alerts.length}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="border border-white/10 rounded-xl p-6 bg-black/70">
            <h2 className="text-lg font-semibold mb-4">Service Status</h2>
            <ul className="space-y-4 text-sm">
              {services.map((service) => (
                <li key={service.name} className="border-b border-white/10 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold">{service.name}</p>
                      <p className="text-xs text-white/60">Owner: {service.owner}</p>
                    </div>
                    <span
                      className={
                        service.status === 'Online'
                          ? 'text-emerald-300'
                          : service.status === 'Maintenance'
                            ? 'text-blue-300'
                            : 'text-yellow-300'
                      }
                    >
                      {service.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <button
                      type="button"
                      onClick={() => restartService(service.name)}
                      className="border border-emerald-400/60 px-3 py-1 rounded-full text-xs uppercase tracking-wide hover:bg-emerald-500/10"
                    >
                      Restart
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleMaintenance(service.name)}
                      className="border border-white/20 px-3 py-1 rounded-full text-xs uppercase tracking-wide hover:border-emerald-400"
                    >
                      Maintenance
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="border border-white/10 rounded-xl p-4 bg-black/70">
              <h2 className="text-sm uppercase tracking-wide text-emerald-300">Operator Actions</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={runHealthCheck}
                  className="border border-emerald-400 px-3 py-1 rounded-full text-xs uppercase tracking-wide hover:bg-emerald-500/10"
                >
                  Run health check
                </button>
                <button
                  type="button"
                  onClick={simulateIncident}
                  className="border border-white/20 px-3 py-1 rounded-full text-xs uppercase tracking-wide hover:border-emerald-400"
                >
                  Simulate incident
                </button>
              </div>
            </div>
            <div className="border border-white/10 rounded-xl p-4 bg-black/70">
              <h2 className="text-sm uppercase tracking-wide text-emerald-300">Active Alerts</h2>
              <div className="mt-3 space-y-3 text-sm">
                {alerts.length ? (
                  alerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-white/80">{alert.message}</p>
                        <p className="text-xs text-white/50">{alert.id}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => resolveAlert(alert.id)}
                        className="border border-emerald-400/60 px-2 py-1 rounded-full text-xs uppercase tracking-wide hover:bg-emerald-500/10"
                      >
                        Resolve
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-white/60">No alerts. Everything looks stable.</p>
                )}
              </div>
            </div>
            <div className="border border-white/10 rounded-xl p-4 bg-black/70">
              <h2 className="text-sm uppercase tracking-wide text-emerald-300">Action log</h2>
              <ul className="mt-3 space-y-2 text-xs text-white/60">
                {actionLog.length ? (
                  actionLog.map((entry) => (
                    <li key={`${entry.time}-${entry.message}`}>{entry.time} · {entry.message}</li>
                  ))
                ) : (
                  <li>No actions yet. Start by running a health check.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border border-emerald-400/40 rounded-xl p-6 bg-black/70">
          <h2 className="text-lg font-semibold mb-4">Admin Console</h2>
          <div className="space-y-2 font-mono text-sm text-emerald-200">
            {consoleOutput.map((line, index) => (
              <div key={`${line}-${index}`}>{line}</div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-white/70">
            <span>$</span>
            <input
              value={consoleInput}
              onChange={(event) => setConsoleInput(event.target.value)}
              onKeyDown={(event) => (event.key === 'Enter' ? runConsoleCommand() : null)}
              className="bg-transparent border-none outline-none flex-1 text-emerald-200"
              placeholder="Type a command..."
            />
            <button
              type="button"
              onClick={runConsoleCommand}
              className="border border-emerald-400/50 px-2 py-1 rounded text-xs hover:border-emerald-300"
            >
              Run
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SysAdminMonitor;
