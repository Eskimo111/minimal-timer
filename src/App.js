import Tasks from "features/tasks/Tasks";
import User from "features/user/User";
import "./App.css";
import Timer from "./features/timer/Timer";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "features/user/signin/SignIn";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="*"
          element={
            <>
              <Tasks />
              <Timer />
              <User />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
