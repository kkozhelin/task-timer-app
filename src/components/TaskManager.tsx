import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addTask, toggleTask, removeTask } from "../features/tasks/tasksSlice";

const TaskManager: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (title.trim()) {
      dispatch(addTask({ title }));
      setTitle("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="w-full p-2 flex-1 border rounded  text-gray-900 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-2 border-b"
          >
            <span
              onClick={() => dispatch(toggleTask(task.id))}
              className={`cursor-pointer ${
                task.completed ? "line-through" : ""
              }`}
            >
              {task.title}
            </span>
            <button
              onClick={() => dispatch(removeTask(task.id))}
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
