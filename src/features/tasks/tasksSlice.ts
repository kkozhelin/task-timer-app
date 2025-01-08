import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Тип задачи
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

// Начальное состояние
interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

// Slice
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string }>) => {
      const newTask: Task = {
        id: Date.now().toString(),
        title: action.payload.title,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      console.log(action);
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
