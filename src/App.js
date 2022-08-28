import Tasks from "features/tasks/Tasks";
import User from "features/user/User";
import "./App.css";
import Timer from "./features/timer/Timer";

function App() {
  return (
    <div className="container">
      <Tasks />
      <Timer />
      <User />
    </div>
  );
}

export default App;
