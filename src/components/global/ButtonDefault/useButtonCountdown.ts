// useButtonCountdown.ts
import { useRef } from "react";

interface UseButtonCountdownProps {
  press: boolean;
  onComplete?: () => void;
  setStatus: (value: boolean) => void;
  delay?: number; // padrão ajustável
}

export function useButtonCountdown({
  press,
  setStatus,
  onComplete,
  delay = 5000,
}: UseButtonCountdownProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startCount = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      onComplete?.();
    }, delay);
  };

  const cancelCount = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handlePress = () => {
    if (!press) {
      startCount();
    } else {
      cancelCount();
    }

    setStatus(!press);
  };

  return { handlePress };
}
