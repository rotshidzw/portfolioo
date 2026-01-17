import { useCallback, useRef } from 'react';

const useClickSound = () => {
  const audioRef = useRef(null);

  const play = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new AudioContext();
    }

    const context = audioRef.current;
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = 'square';
    oscillator.frequency.value = 880;
    gainNode.gain.value = 0.05;

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.start();
    oscillator.stop(context.currentTime + 0.08);
  }, []);

  return play;
};

export default useClickSound;
