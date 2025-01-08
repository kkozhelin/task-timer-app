import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice";
import timerReducer from "../features/timer/timerSlice";
import themeReducer from "../features/theme/themeSlice";

// Инициализация Store
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    timer: timerReducer,
    theme: themeReducer,
  },
});

// Типы для использования в приложении
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
