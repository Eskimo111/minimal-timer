import React, { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { RiArrowDropUpLine, RiCupFill } from "react-icons/ri";
import { VscRefresh } from "react-icons/vsc";
import BreakModal from "../modal/BreakModal";
import alarm from "../asset/sounds/alarm.mp3";
import "./timer.css";
import Clock from "./Clock";
import AddTaskButton from "../tasklist/AddTaskButton";
import AddTaskModal from "modal/AddTaskModal";
import { IoMdArrowDropup } from "react-icons/io";
import Rotate from "react-reveal/Rotate";
import LoginButton from "user/LoginButton";
import LoginModal from "modal/LoginModal";

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
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [buttonGroupShow, setButtonGroupShow] = useState(true);
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
      <AddTaskButton openModal={() => setAddTaskModalShow(true)} />
      <LoginButton openModal={() => setLoginModalShow(true)} />
      <div className="timer__task">{task}</div>

      <Clock minute={minute} second={second} />

      {buttonGroupShow && (
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
          <button
            className="btn-square"
            onClick={() => setBreakModalShow(true)}
          >
            <RiCupFill size={22}></RiCupFill>
          </button>
        </div>
      )}
      {/*OPEN-HIDDEN BUTTON GROUP */}
      <div
        className="toggle"
        onClick={() => setButtonGroupShow(!buttonGroupShow)}
      >
        <RiArrowDropUpLine size={30} />
      </div>

      <BreakModal
        isShowing={breakModalShow}
        onHide={() => setBreakModalShow(false)}
        setTimer={(minute) => setTimer(minute)}
        setTask={(task) => setTask(task)}
      />
      <AddTaskModal
        isShowing={addTaskModalShow}
        onHide={() => setAddTaskModalShow(false)}
        setTimer={(minute) => setTimer(minute)}
        setTask={(task) => setTask(task)}
      />

      <LoginModal
        isShowing={loginModalShow}
        onHide={() => setLoginModalShow(false)}
      />
    </>
  );
};

export default Timer;
