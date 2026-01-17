import { useMemo, useState } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const gridSize = 8;

const Pathfinder = () => {
  const [blocked, setBlocked] = useState({});

  const cells = useMemo(() => Array.from({ length: gridSize * gridSize }, (_, i) => i), []);

  const toggleBlock = (index) => {
    setBlocked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixBackground />
      <TopNav />
      <main className="pt-28 px-6 pb-20 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Pathfinder Grid</h1>
        <p className="text-white/70 max-w-2xl mb-8">
          Tap cells to toggle obstacles. This is a simple grid interaction that mirrors how I prototype pathfinding and
          system flows.
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {cells.map((cell) => (
            <button
              key={cell}
              type="button"
              onClick={() => toggleBlock(cell)}
              className={`h-14 w-14 rounded-md border transition ${
                blocked[cell]
                  ? 'bg-emerald-500/20 border-emerald-400'
                  : 'border-white/10 hover:border-emerald-400/60'
              }`}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pathfinder;
