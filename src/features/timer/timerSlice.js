import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskname: "Working",
  session: 25,
  timeLeft: 1500,
  isPaused: true,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTimer: (state, action) => {
      state.taskname = action.payload.taskname;
      state.session = action.payload.session;
      state.timeLeft = action.payload.session * 60;
    },
    updateTimeLeft: (state) => {
      state.timeLeft -= 1;
    },
    refreshTimer: (state) => {
      state.timeLeft = state.session * 60;
    },
    togglePause: (state) => {
      state.isPaused = !state.isPaused;
    },
  },
});

export const { refreshTimer, updateTimeLeft, setTimer, togglePause } =
  timerSlice.actions;

export default timerSlice.reducer;
