import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import {
  startTimer,
  stopTimer,
  resetTimer,
  tick,
  switchMode,
} from "../features/timer/timerSlice";

const Timer: React.FC = () => {
  const dispatch = useDispatch();
  const { timeLeft, mode, isRunning } = useSelector(
    (state: RootState) => state.timer
  );

  // Форматирование времени
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  // Обновление таймера каждую секунду
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  // Автопереключение режима
  useEffect(() => {
    if (timeLeft === 0) {
      dispatch(switchMode());
    }
  }, [timeLeft, dispatch]);

  return (
    <div className="p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">
        {mode === "work" ? "Work Time" : "Break Time"}
      </h1>
      <div className="text-6xl font-mono mb-4">{formatTime(timeLeft)}</div>
      <div className="flex justify-center gap-4">
        {!isRunning ? (
          <button
            onClick={() => dispatch(startTimer())}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Start
          </button>
        ) : (
          <button
            onClick={() => dispatch(stopTimer())}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Stop
          </button>
        )}
        <button
          onClick={() => dispatch(resetTimer())}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
