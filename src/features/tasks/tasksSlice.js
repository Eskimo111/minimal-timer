import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const API_URL = "pomodoroTimer/api/";

const initialState = {
  tasklist: [],
  status: "idle",
};

export const addTaskAsync = createAsyncThunk("tasks/addTask", async (input) => {
  const response = await axios.post(`users/${input.userId}/addTask`, input);
  return input;
});

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTaskList: (state, action) => {
      state.tasklist = action.payload;
    },
    addTaskList: (state, action) => {
      state.tasklist.push(action.payload);
    },
  },
  extraReducers: (builder) =>
    builder.addCase(addTaskAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.tasklist.push(action.payload);
    }),
});

export const { setTaskList, addTaskList } = tasksSlice.actions;

export default tasksSlice.reducer;
