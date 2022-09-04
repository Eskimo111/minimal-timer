import { setTimer } from "features/timer/timerSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./tasklist.css";
const toMinute = (second) => {
  return `${Math.floor(second / 60)}`;
};

const toMinuteAndSecond = (second) => {
  return `${Math.floor(second / 60)}:${second % 60}`;
};

const TaskItem = (props) => {
  const isActive = false;
  const status = isActive ? "Doing" : props.data.status ? "Done" : "Todo";
  const isTimerPaused = useSelector((state) => state.timer.isPaused);
  const dispatch = useDispatch();
  return (
    <li
      className={`task-item ${isActive ? "active" : ""}`}
      onClick={() => {
        dispatch(
          setTimer({
            taskname: props.data.name,
            session: toMinute(props.data.duration),
          })
        );
      }}
    >
      <div className="task-item__left">
        <h4>{props.data.name}</h4>
        <p>{toMinute(props.data.duration)} minute(s)</p>
      </div>
      <div className="task-item__right">
        <p>{status}</p>
      </div>
    </li>
  );
};

export default TaskItem;
