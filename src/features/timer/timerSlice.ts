import { createSlice } from "@reduxjs/toolkit";

interface TimerState {
  timeLeft: number;
  mode: "work" | "break";
  isRunning: boolean;
  workSessionsCompleted: number;
  totalWorkTime: number;
  workSessionsData: { date: string; duration: number }[]; // Новое поле
}

const initialState: TimerState = {
  timeLeft: 25 * 60, // 25 минут
  mode: "work",
  isRunning: false,
  workSessionsCompleted: 0,
  totalWorkTime: 0,
  workSessionsData: [],
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
    },
    stopTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state) => {
      state.isRunning = false;
      state.timeLeft = state.mode === "work" ? 25 * 60 : 5 * 60;
    },
    tick: (state) => {
      if (state.isRunning && state.timeLeft > 0) {
        state.timeLeft -= 1;
      }
    },
    switchMode: (state) => {
      if (state.mode === "work") {
        const completedTime = 25 * 60 - state.timeLeft;
        state.workSessionsCompleted += 1;
        state.totalWorkTime += completedTime;

        // Добавляем данные о сессии
        state.workSessionsData.push({
          date: new Date().toLocaleDateString(),
          duration: completedTime,
        });
      }
      state.mode = state.mode === "work" ? "break" : "work";
      state.timeLeft = state.mode === "work" ? 25 * 60 : 5 * 60;
    },
  },
});

export const { startTimer, stopTimer, resetTimer, tick, switchMode } =
  timerSlice.actions;
export default timerSlice.reducer;
