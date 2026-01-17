import { useMemo, useState } from 'react';
import Link from 'next/link';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const gridSize = 8;
const startIndex = 0;
const endIndex = gridSize * gridSize - 1;

const Pathfinder = () => {
  const [blocked, setBlocked] = useState({});
  const [path, setPath] = useState([]);
  const [visited, setVisited] = useState([]);
  const [allowDiagonal, setAllowDiagonal] = useState(false);
  const [showVisited, setShowVisited] = useState(true);
  const [editMode, setEditMode] = useState('block');
  const [waypoint, setWaypoint] = useState(null);
  const [density, setDensity] = useState(0.25);

  const cells = useMemo(() => Array.from({ length: gridSize * gridSize }, (_, i) => i), []);

  const toggleCell = (index) => {
    if (index === startIndex || index === endIndex) return;
    if (editMode === 'waypoint') {
      setWaypoint(index === waypoint ? null : index);
      setPath([]);
      return;
    }
    setBlocked((prev) => ({ ...prev, [index]: !prev[index] }));
    if (index === waypoint) {
      setWaypoint(null);
    }
    setPath([]);
  };

  const getNeighbors = (idx) => {
    const x = idx % gridSize;
    const y = Math.floor(idx / gridSize);
    const next = [];
    if (x > 0) next.push(idx - 1);
    if (x < gridSize - 1) next.push(idx + 1);
    if (y > 0) next.push(idx - gridSize);
    if (y < gridSize - 1) next.push(idx + gridSize);
    if (allowDiagonal) {
      if (x > 0 && y > 0) next.push(idx - gridSize - 1);
      if (x < gridSize - 1 && y > 0) next.push(idx - gridSize + 1);
      if (x > 0 && y < gridSize - 1) next.push(idx + gridSize - 1);
      if (x < gridSize - 1 && y < gridSize - 1) next.push(idx + gridSize + 1);
    }
    return next;
  };

  const runBfs = (start, target) => {
    const queue = [start];
    const visitedNodes = new Set([start]);
    const prevMap = {};

    while (queue.length) {
      const current = queue.shift();
      if (current === target) break;
      getNeighbors(current).forEach((next) => {
        if (visitedNodes.has(next) || blocked[next]) return;
        visitedNodes.add(next);
        prevMap[next] = current;
        queue.push(next);
      });
    }

    const newPath = [];
    let cur = target;
    while (cur !== undefined && cur !== start) {
      newPath.push(cur);
      cur = prevMap[cur];
    }

    if (cur === start) {
      newPath.push(start);
      return { path: newPath.reverse(), visited: Array.from(visitedNodes) };
    }

    return { path: [], visited: Array.from(visitedNodes) };
  };

  const findPath = () => {
    const firstTarget = waypoint ?? endIndex;
    const firstLeg = runBfs(startIndex, firstTarget);

    if (waypoint && firstLeg.path.length) {
      const secondLeg = runBfs(firstTarget, endIndex);
      if (secondLeg.path.length) {
        setPath([...firstLeg.path.slice(0, -1), ...secondLeg.path]);
        setVisited(Array.from(new Set([...firstLeg.visited, ...secondLeg.visited])));
        return;
      }
    }

    setPath(firstLeg.path);
    setVisited(firstLeg.visited);
  };

  const resetGrid = () => {
    setBlocked({});
    setPath([]);
    setVisited([]);
    setWaypoint(null);
  };

  const randomize = () => {
    const next = {};
    cells.forEach((cell) => {
      if (cell === startIndex || cell === endIndex) return;
      if (Math.random() < density) {
        next[cell] = true;
      }
    });
    setBlocked(next);
    setPath([]);
    setVisited([]);
  };

  const pathLength = path.length ? path.length - 1 : 0;
  const blockedCount = Object.keys(blocked).length;

  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixBackground />
      <TopNav />
      <main className="pt-28 px-6 pb-20 max-w-5xl mx-auto">
        <div className="mb-6">
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-emerald-200/80 hover:text-emerald-200"
          >
            <span aria-hidden="true">←</span>
            Back to Dev Lab
          </Link>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Pathfinder Grid</h1>
        <p className="text-white/70 max-w-2xl mb-6">
          Tap cells to toggle obstacles, or switch to waypoint mode to add a checkpoint. This grid mirrors how I prototype
          routing logic and system flows.
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
          <button
            type="button"
            onClick={randomize}
            className="border border-white/20 px-4 py-2 rounded-full text-xs uppercase tracking-wide hover:border-emerald-400 transition"
          >
            Randomize Obstacles
          </button>
          <button
            type="button"
            onClick={() => setEditMode((prev) => (prev === 'block' ? 'waypoint' : 'block'))}
            className={`border px-4 py-2 rounded-full text-xs uppercase tracking-wide transition ${
              editMode === 'waypoint'
                ? 'border-emerald-400 text-emerald-200'
                : 'border-white/20 hover:border-emerald-400'
            }`}
          >
            {editMode === 'waypoint' ? 'Waypoint Mode' : 'Obstacle Mode'}
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <div className="border border-white/10 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Path length</p>
            <p className="text-2xl font-bold mt-2">{pathLength}</p>
          </div>
          <div className="border border-white/10 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Visited nodes</p>
            <p className="text-2xl font-bold mt-2">{visited.length}</p>
          </div>
          <div className="border border-white/10 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Obstacles</p>
            <p className="text-2xl font-bold mt-2">{blockedCount}</p>
          </div>
          <div className="border border-white/10 rounded-xl p-4 bg-black/70">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Controls</p>
            <div className="mt-2 space-y-2 text-xs text-white/70">
              <label className="flex items-center justify-between">
                Diagonal
                <input
                  type="checkbox"
                  checked={allowDiagonal}
                  onChange={() => setAllowDiagonal((prev) => !prev)}
                />
              </label>
              <label className="flex items-center justify-between">
                Show visited
                <input
                  type="checkbox"
                  checked={showVisited}
                  onChange={() => setShowVisited((prev) => !prev)}
                />
              </label>
              <label className="flex items-center justify-between">
                Density
                <input
                  type="range"
                  min="0"
                  max="0.45"
                  step="0.05"
                  value={density}
                  onChange={(event) => setDensity(Number(event.target.value))}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {cells.map((cell) => {
            const isVisited = showVisited && visited.includes(cell);
            const isBlocked = blocked[cell];
            const isWaypoint = waypoint === cell;
            return (
              <button
                key={cell}
                type="button"
                onClick={() => toggleCell(cell)}
                className={`h-14 w-14 rounded-md border transition ${
                  cell === startIndex
                    ? 'bg-emerald-500/40 border-emerald-300'
                    : cell === endIndex
                      ? 'bg-purple-500/40 border-purple-300'
                      : isWaypoint
                        ? 'bg-blue-500/30 border-blue-300'
                        : path.includes(cell)
                          ? 'bg-emerald-400/20 border-emerald-300'
                          : isBlocked
                            ? 'bg-white/10 border-white/30'
                            : isVisited
                              ? 'bg-emerald-500/10 border-emerald-500/40'
                              : 'border-white/10 hover:border-emerald-400/60'
                }`}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Pathfinder;
