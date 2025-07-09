import { useEffect, useState } from 'react';

/**
 * Хук для анимированного счетчика
 * Оптимизирован для плавной анимации чисел
 */
interface UseAnimatedCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  isActive?: boolean;
}

export const useAnimatedCounter = ({
  start = 0,
  end,
  duration = 2000,
  isActive = true
}: UseAnimatedCounterOptions) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isActive) return;

    let startTime: number;
    const startValue = start;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = Math.floor(
        startValue + (endValue - startValue) * easeOutQuart
      );
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration, isActive]);

  return count;
};