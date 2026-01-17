import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrameId;
    const letters = '01<>[]{}#$%&'.split('');
    const fontSize = 16;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }, () => 1);

    const draw = () => {
      if (!context) return;
      context.fillStyle = 'rgba(0, 0, 0, 0.08)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#00ff9d';
      context.font = `${fontSize}px monospace`;

      drops.forEach((drop, index) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = index * fontSize;
        context.fillText(text, x, drop * fontSize);

        if (drop * fontSize > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }

        drops[index] += 1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-60 pointer-events-none" />;
};

export default MatrixBackground;
