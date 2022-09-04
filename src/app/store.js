import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import timerReducer from "features/timer/timerSlice";
import userReducer from "features/user/userSlice";
import tasksReducer from "features/tasks/tasksSlice";
import thunk from "redux-thunk";

export const store = configureStore(
  {
    reducer: { timer: timerReducer, user: userReducer, tasks: tasksReducer },
  },
  applyMiddleware(thunk)
);
