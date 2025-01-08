import React from "react";
import TaskManager from "./components/TaskManager";
import Timer from "./components/Timer";
import PomodoroStats from "./components/PomodoroStats";
import PomodoroChart from "./components/PomodoroChart";
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen p-4 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Pomodoro App</h1>
        <ThemeToggle />
      </div>
      <Timer />
      <PomodoroStats />
      <PomodoroChart />
      <TaskManager />
    </div>
  );
};

export default App;
