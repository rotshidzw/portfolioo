import { useState } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const PixelClicker = () => {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const handleClick = () => {
    setScore((prev) => prev + 1);
    setStreak((prev) => prev + 1);
  };

  const reset = () => {
    setScore(0);
    setStreak(0);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixBackground />
      <TopNav />
      <main className="pt-28 px-6 pb-20 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Pixel Clicker</h1>
        <p className="text-white/70 max-w-2xl mb-8">
          A quick reflex mini-game to show UI state management and animation timing.
        </p>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <button
            type="button"
            onClick={handleClick}
            className="h-36 w-36 bg-emerald-400/20 border border-emerald-400 rounded-xl text-emerald-200 text-lg font-semibold hover:-translate-y-1 transition"
          >
            Tap
          </button>
          <div className="space-y-3 text-sm">
            <p>Score: <span className="text-emerald-300 font-bold">{score}</span></p>
            <p>Streak: <span className="text-emerald-300 font-bold">{streak}</span></p>
            <button
              type="button"
              onClick={reset}
              className="border border-white/20 px-4 py-2 rounded-full hover:border-emerald-400 transition"
            >
              Reset
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PixelClicker;
