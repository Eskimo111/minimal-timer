import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setTaskList } from "features/tasks/tasksSlice";
import { useDispatch } from "react-redux";

const API_URL = "https://a409-14-179-122-200.ap.ngrok.io/pomodoroTimer/api/";

const initialState = {
  isLogin: false,
  message: "",
  userInfo: {
    id: "",
    email: "",
    timeFocusToday: 0,
    timeFocusThisWeek: 0,
  },
  status: "idle",
};

export const fetchUserById = createAsyncThunk(
  "user/getList",
  async (userid) => {
    const response = await axios.get(`users/${userid}`);
    console.log(response.data);
    return response.data;
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (input, { dispatch }) => {
    const response = await axios.post(`users/login`, input);
    if (response.data.userInfo !== null) {
      dispatch(loginSuccess());
      dispatch(setUserInfo(response.data.userInfo));
      dispatch(setTaskList(response.data.tasklist));
    } else dispatch(loginFailed());
    return response.data;
  }
);

/*export const login = (input) => {
  return (dispatch, getState) => {
    const response = axios.post(`${API_URL}users/login`, input);
    console.log(response.data);
    dispatch();
  };
};*/

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.message = "Logout successfully!";
    },
    loginSuccess: (state) => {
      state.message = "Login successfully!";
    },
    loginFailed: (state) => {
      state.message = "Login failed!";
    },
    clearMessage: (state) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      /*.addCase(fetchUserById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = "idle";
        state.isLogin = true;
        const userInfo = {
          id: action.payload.id,
          email: action.payload.email,
          timeFocusThisWeek: action.payload.timeFocusThisWeek,
          timeFocusToday: action.payload.timeFocusToday,
        };
        state.userInfo = userInfo;
      })
      .addCase(fetchUserById.rejected, (state) => {
        state.isLogin = false;
      })*/
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload.userInfo === null) state.isLogin = false;
        else state.isLogin = true;
        /*const userInfo = {
          id: action.payload.userInfo.id,
          email: action.payload.userInfo.email,
          timeFocusThisWeek: action.payload.userInfo.timeFocusThisWeek,
          timeFocusToday: action.payload.userInfo.timeFocusToday,
        };
        state.userInfo = userInfo;*/
        //const dispatch = useDispatch();
        //dispatch(setUserInfo(action.payload.userInfo));
        //dispatch(setTaskList(action.payload.tasklist));
      });
  },
});

export const { setUserInfo, logout, loginSuccess, loginFailed, clearMessage } =
  userSlice.actions;

export default userSlice.reducer;
