import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PomodoroChart: React.FC = () => {
  const { workSessionsData } = useSelector((state: RootState) => state.timer);

  if (workSessionsData.length === 0) {
    return <p className="text-center mt-4">No data available yet.</p>;
  }

  return (
    <div className="p-4 rounded shadow bg-white dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-xl font-bold mb-2">Productivity Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={workSessionsData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis dataKey="duration" />
          <Tooltip />
          <Line type="monotone" dataKey="duration" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PomodoroChart;
