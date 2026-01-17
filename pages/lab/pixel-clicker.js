import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const difficulties = [
  { label: 'Sprint', time: 10 },
  { label: 'Focus', time: 20 },
  { label: 'Endurance', time: 30 },
];

const gridSize = 4;

const PixelClicker = () => {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [bestScore, setBestScore] = useState(0);
  const [active, setActive] = useState(false);
  const [target, setTarget] = useState(0);
  const [misses, setMisses] = useState(0);
  const [difficulty, setDifficulty] = useState(difficulties[1]);

  const cells = useMemo(
    () => Array.from({ length: gridSize * gridSize }, (_, index) => index),
    []
  );

  const multiplier = streak >= 12 ? 3 : streak >= 6 ? 2 : 1;
  const goal = 32;

  const startGame = () => {
    setActive(true);
    setScore(0);
    setStreak(0);
    setMisses(0);
    setTimeLeft(difficulty.time);
  };

  const reset = () => {
    setActive(false);
    setScore(0);
    setStreak(0);
    setMisses(0);
    setTimeLeft(difficulty.time);
  };

  const handleCellClick = (index) => {
    if (!active) return;
    if (index === target) {
      setScore((prev) => prev + multiplier);
      setStreak((prev) => prev + 1);
      setTarget((prev) => (prev + Math.floor(Math.random() * 6) + 3) % (gridSize * gridSize));
    } else {
      setMisses((prev) => prev + 1);
      setStreak(0);
    }
  };

  useEffect(() => {
    if (!active) return;
    if (timeLeft === 0) {
      setActive(false);
      if (score > bestScore) {
        setBestScore(score);
      }
      return;
    }

    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [active, timeLeft, score, bestScore]);

  useEffect(() => {
    if (!active) return;
    const shuffle = setInterval(() => {
      setTarget(Math.floor(Math.random() * gridSize * gridSize));
    }, 900);
    return () => clearInterval(shuffle);
  }, [active]);

  const progress = Math.min(100, Math.round((score / goal) * 100));
  const accuracy = score + misses === 0 ? 0 : Math.round((score / (score + misses)) * 100);

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
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Pixel Clicker</h1>
        <p className="text-white/70 max-w-2xl mb-8">
          A reflex + focus drill. Hit the glowing node as it moves, stack combos for multipliers, and keep accuracy high.
        </p>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid grid-cols-4 gap-3">
            {cells.map((cell) => (
              <button
                key={cell}
                type="button"
                onClick={() => handleCellClick(cell)}
                className={`h-16 md:h-20 rounded-xl border text-sm font-semibold transition ${
                  cell === target && active
                    ? 'bg-emerald-400/30 border-emerald-300 text-emerald-100 shadow-[0_0_25px_rgba(16,185,129,0.5)]'
                    : 'bg-white/5 border-white/15 text-white/60 hover:border-emerald-400/60'
                }`}
              >
                {cell === target && active ? 'TARGET' : 'NODE'}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            <div className="border border-white/10 rounded-xl p-4 bg-black/70">
              <p className="text-xs uppercase tracking-wide text-emerald-300">Mission</p>
              <p className="text-lg font-semibold mt-2">Reach {goal} points with 80%+ accuracy.</p>
              <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400" style={{ width: `${progress}%` }} />
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="border border-white/10 rounded-xl p-4 bg-black/70">
                <p className="text-xs uppercase tracking-wide text-emerald-300">Score</p>
                <p className="text-2xl font-bold mt-2">{score}</p>
              </div>
              <div className="border border-white/10 rounded-xl p-4 bg-black/70">
                <p className="text-xs uppercase tracking-wide text-emerald-300">Multiplier</p>
                <p className="text-2xl font-bold mt-2">x{multiplier}</p>
              </div>
              <div className="border border-white/10 rounded-xl p-4 bg-black/70">
                <p className="text-xs uppercase tracking-wide text-emerald-300">Accuracy</p>
                <p className="text-2xl font-bold mt-2">{accuracy}%</p>
              </div>
              <div className="border border-white/10 rounded-xl p-4 bg-black/70">
                <p className="text-xs uppercase tracking-wide text-emerald-300">Time left</p>
                <p className="text-2xl font-bold mt-2">{timeLeft}s</p>
              </div>
            </div>
            <div className="border border-white/10 rounded-xl p-4 bg-black/70 space-y-3">
              <p className="text-xs uppercase tracking-wide text-emerald-300">Controls</p>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setDifficulty(option)}
                    className={`px-3 py-1 rounded-full text-xs uppercase tracking-wide border transition ${
                      difficulty.label === option.label
                        ? 'border-emerald-300 text-emerald-200'
                        : 'border-white/20 text-white/70 hover:border-emerald-400/60'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={active ? reset : startGame}
                  className="border border-emerald-400 px-4 py-2 rounded-full text-xs uppercase tracking-wide hover:bg-emerald-500/10 transition"
                >
                  {active ? 'Reset' : 'Start Session'}
                </button>
                <button
                  type="button"
                  onClick={() => setActive((prev) => !prev)}
                  className="border border-white/20 px-4 py-2 rounded-full text-xs uppercase tracking-wide hover:border-emerald-400 transition"
                >
                  {active ? 'Pause' : 'Resume'}
                </button>
              </div>
              <div className="text-xs text-white/60">
                Best score: <span className="text-emerald-200 font-semibold">{bestScore}</span> · Streak:{' '}
                <span className="text-emerald-200 font-semibold">{streak}</span> · Misses:{' '}
                <span className="text-emerald-200 font-semibold">{misses}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PixelClicker;
