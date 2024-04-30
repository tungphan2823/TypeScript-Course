import Container from "./UI/Container.tsx";
import {
  useTimersContext,
  type Timer as TimerProps,
} from "../store/timers-context.tsx";
import { useState, useEffect, useRef } from "react";

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingState, setRemainingTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext();
  if (remainingState <= 0 && interval.current) {
    clearInterval(interval.current);
  }
  useEffect(() => {
    let timer: number;
    
    if (isRunning) {
      timer = setInterval(function () {
        setRemainingTime((prevTime) => prevTime - 50);
      }, 50);
      interval.current = timer;

    } else if (interval.current) {
      clearInterval(interval.current)
    }

    return () => clearInterval(timer);
  }, [isRunning]);
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
