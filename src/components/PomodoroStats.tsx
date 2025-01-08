import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const PomodoroStats: React.FC = () => {
  const { workSessionsCompleted, totalWorkTime } = useSelector(
    (state: RootState) => state.timer
  );

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="p-4 rounded shadow bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-xl font-bold mb-2">Pomodoro Stats</h2>
      <p className="text-lg">
        Completed Sessions:{" "}
        <span className="font-bold">{workSessionsCompleted}</span>
      </p>
      <p className="text-lg">
        Total Work Time:{" "}
        <span className="font-bold">{formatTime(totalWorkTime)}</span>
      </p>
    </div>
  );
};

export default PomodoroStats;
