import { useEffect, useState } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import TopNav from '@/components/TopNav';

const PixelClicker = () => {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [bestScore, setBestScore] = useState(0);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (!active) return;
    setScore((prev) => prev + 1);
    setStreak((prev) => prev + 1);
  };

  const reset = () => {
    setScore(0);
    setStreak(0);
    setTimeLeft(10);
    setActive(false);
  };

  const startGame = () => {
    setActive(true);
    setScore(0);
    setStreak(0);
    setTimeLeft(10);
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
            className={`h-36 w-36 border rounded-xl text-lg font-semibold transition ${
              active
                ? 'bg-emerald-400/20 border-emerald-400 text-emerald-200 hover:-translate-y-1'
                : 'bg-white/5 border-white/20 text-white/60'
            }`}
          >
            {active ? 'Tap' : 'Start'}
          </button>
          <div className="space-y-3 text-sm">
            <p>Score: <span className="text-emerald-300 font-bold">{score}</span></p>
            <p>Streak: <span className="text-emerald-300 font-bold">{streak}</span></p>
            <p>Time left: <span className="text-emerald-300 font-bold">{timeLeft}s</span></p>
            <p>Best score: <span className="text-emerald-300 font-bold">{bestScore}</span></p>
            <button
              type="button"
              onClick={active ? reset : startGame}
              className="border border-white/20 px-4 py-2 rounded-full hover:border-emerald-400 transition"
            >
              {active ? 'Reset' : 'Start Game'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PixelClicker;
