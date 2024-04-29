import Container from "./UI/Container.tsx";
import { type Timer as TimerProps } from "../store/timers-context.tsx";
import { useState, useEffect, useRef } from "react";

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingState, setRemainingTime] = useState(duration * 1000);
  if (remainingState <= 0 && interval.current) {
    clearInterval(interval.current);
  }
  useEffect(() => {
    const timer = setInterval(function () {
      setRemainingTime((prevTime) => prevTime - 50);
    }, 50);
    interval.current = timer;
    return () => clearInterval(timer);
  }, []);
  const formattedRemainingTime = (remainingState / 1000).toFixed(2);
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingState}></progress>
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
