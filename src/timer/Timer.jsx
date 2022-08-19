import React, { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { RiCupFill } from "react-icons/ri";
import { VscRefresh } from "react-icons/vsc";
import BreakModal from "../modal/BreakModal";
import alarm from "../asset/sounds/alarm.mp3";
import "./timer.css";
import Clock from "./Clock";

const defaultTime = {
  second: 0,
  minute: 25,
};

const audio = new Audio(alarm);

const Timer = () => {
  const [task, setTask] = useState("Working");
  const [second, setSecond] = useState(defaultTime.second);
  const [minute, setMinute] = useState(defaultTime.minute);
  const [breakModalShow, setBreakModalShow] = useState(false);
  const [addTaskModalShow, setAddTaskModalShow] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (isPaused) return;
      updateTimer(timerId);
    }, 1000);
    return () => clearInterval(timerId);
  });

  function updateTimer() {
    if (second > 0) setSecond(second - 1);
    else if (minute > 0) {
      setMinute(minute - 1);
      setSecond(59);
    } else ringBell();
  }

  function ringBell() {
    audio.play();
    setIsPaused(true);
  }

  function setTimer(minute) {
    setMinute(minute);
    setSecond(0);
    setIsPaused(true);
  }

  return (
    <>
      <div className="timer__task">{task}</div>

      <Clock minute={minute} second={second} />

      <div className="timer__button-group">
        {isPaused ? (
          <button className="btn-circle" onClick={() => setIsPaused(false)}>
            <FaPlay size={16}></FaPlay>
          </button>
        ) : (
          <button className="btn-circle" onClick={() => setIsPaused(true)}>
            <FaPause size={16}></FaPause>
          </button>
        )}
        <button
          className="btn-circle"
          onClick={() => {
            setSecond(defaultTime.second);
            setMinute(defaultTime.minute);
            setIsPaused(true);
            setTask("Working");
          }}
        >
          <VscRefresh size={22} />
        </button>
        <hr></hr>
        <button className="btn-square" onClick={() => setBreakModalShow(true)}>
          <RiCupFill size={22}></RiCupFill>
        </button>
      </div>

      <BreakModal
        isShowing={breakModalShow}
        onHide={() => setBreakModalShow(false)}
        setTimer={(minute) => setTimer(minute)}
        setTask={(task) => setTask(task)}
      />
    </>
  );
};

export default Timer;
