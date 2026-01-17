import { useMemo, useState } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const gridSize = 8;
const startIndex = 0;
const endIndex = gridSize * gridSize - 1;

const Pathfinder = () => {
  const [blocked, setBlocked] = useState({});
  const [path, setPath] = useState([]);

  const cells = useMemo(() => Array.from({ length: gridSize * gridSize }, (_, i) => i), []);

  const toggleBlock = (index) => {
    if (index === startIndex || index === endIndex) return;
    setBlocked((prev) => ({ ...prev, [index]: !prev[index] }));
    setPath([]);
  };

  const findPath = () => {
    const queue = [startIndex];
    const visited = new Set([startIndex]);
    const prevMap = {};

    const neighbors = (idx) => {
      const x = idx % gridSize;
      const y = Math.floor(idx / gridSize);
      const next = [];
      if (x > 0) next.push(idx - 1);
      if (x < gridSize - 1) next.push(idx + 1);
      if (y > 0) next.push(idx - gridSize);
      if (y < gridSize - 1) next.push(idx + gridSize);
      return next;
    };

    while (queue.length) {
      const current = queue.shift();
      if (current === endIndex) break;
      neighbors(current).forEach((next) => {
        if (visited.has(next) || blocked[next]) return;
        visited.add(next);
        prevMap[next] = current;
        queue.push(next);
      });
    }

    const newPath = [];
    let cur = endIndex;
    while (cur !== undefined && cur !== startIndex) {
      newPath.push(cur);
      cur = prevMap[cur];
    }

    if (cur === startIndex) {
      newPath.push(startIndex);
      setPath(newPath.reverse());
    } else {
      setPath([]);
    }
  };

  const resetGrid = () => {
    setBlocked({});
    setPath([]);
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
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            type="button"
            onClick={findPath}
            className="border border-emerald-400 px-4 py-2 rounded-full text-xs uppercase tracking-wide hover:bg-emerald-500/10 transition"
          >
            Run Path
          </button>
          <button
            type="button"
            onClick={resetGrid}
            className="border border-white/20 px-4 py-2 rounded-full text-xs uppercase tracking-wide hover:border-emerald-400 transition"
          >
            Reset
          </button>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {cells.map((cell) => (
            <button
              key={cell}
              type="button"
              onClick={() => toggleBlock(cell)}
              className={`h-14 w-14 rounded-md border transition ${
                cell === startIndex
                  ? 'bg-emerald-500/40 border-emerald-300'
                  : cell === endIndex
                    ? 'bg-purple-500/40 border-purple-300'
                    : path.includes(cell)
                      ? 'bg-emerald-400/20 border-emerald-300'
                      : blocked[cell]
                        ? 'bg-white/10 border-white/30'
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
