import Link from 'next/link';
import { useEffect, useState } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';
import useClickSound from '@/hooks/useClickSound';

const labTiles = [
  {
    title: 'Matrix Console',
    description: 'A faux command console with animated output and status lights.',
    href: '/lab/matrix-console',
  },
  {
    title: 'Pathfinder Grid',
    description: 'Interactive grid to visualize a simple pathfinding flow.',
    href: '/lab/pathfinder',
  },
  {
    title: 'Pixel Clicker',
    description: 'Fast-tap mini game with scoring and streak tracking.',
    href: '/lab/pixel-clicker',
  },
  {
    title: 'AI Prompter',
    description: 'Prompt builder UI to compose structured AI prompts.',
    href: '/lab/ai-prompter',
  },
  {
    title: 'E-Waste Dashboard',
    description: 'Lightweight dashboard highlighting e-waste project impact.',
    href: '/lab/e-waste-dashboard',
  },
];

const LabPage = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [stats, setStats] = useState(null);
  const playClick = useClickSound();

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch('/api/lab-stats');
      const data = await response.json();
      setStats(data);
    };

    fetchStats();
  }, []);

  const handleTileClick = () => {
    if (soundEnabled) {
      playClick();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixBackground />
      <TopNav />
      <main className="pt-28 pb-20 px-6 max-w-6xl mx-auto lab-grid-bg">
        <div className="flex flex-col gap-6 mb-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Chester Dev Lab</h1>
          <p className="max-w-2xl text-white/80 text-lg">
            A hands-on playground for recruiter demos: interactive UI experiments, mini tools, and creative engineering
            demos that showcase how I think and build.
          </p>
          <button
            type="button"
            onClick={() => setSoundEnabled((prev) => !prev)}
            className="w-fit border border-emerald-400 px-4 py-2 text-xs uppercase tracking-wide rounded-full hover:bg-emerald-500/10 transition"
          >
            Sound {soundEnabled ? 'On' : 'Off'}
          </button>
        </div>

        {stats ? (
          <div className="border border-emerald-400/40 rounded-xl p-4 mb-10 bg-black/60">
            <p className="text-sm uppercase tracking-wide text-emerald-300">Lab Stats</p>
            <div className="mt-2 text-sm text-white/80 grid gap-2 md:grid-cols-3">
              <div>Experiments: {stats.experiments}</div>
              <div>Primary Stack: {stats.stack}</div>
              <div>Focus: {stats.focus}</div>
            </div>
          </div>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2">
          {labTiles.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className="group border border-white/10 rounded-xl p-6 bg-black/70 hover:border-emerald-400/60 transition"
              onClick={handleTileClick}
            >
              <h2 className="text-xl font-bold mb-2 group-hover:text-emerald-300">{tile.title}</h2>
              <p className="text-sm text-white/70">{tile.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LabPage;
