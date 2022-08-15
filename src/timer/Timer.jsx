import React, { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { RiCupFill } from "react-icons/ri";
import { VscRefresh } from "react-icons/vsc";
import Modal from "../modal/Modal";

import "./timer.css";

const defaultTime = {
  second: 0,
  minute: 25,
};

const Timer = () => {
  const [task, setTask] = useState("Working");
  const [second, setSecond] = useState(defaultTime.second);
  const [minute, setMinute] = useState(defaultTime.minute);
  const [modalShow, setModalShow] = React.useState(false);
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
    }
  }

  function setTimer(minute) {
    setMinute(minute);
    setSecond(0);
    setIsPaused(true);
  }

  return (
    <>
      <div className="timer__task">{task}</div>
      <div className="timer__countdown-clock">
        <p>
          {minute}:{second > 9 ? second : `0${second}`}
        </p>
      </div>
      <div className="timer__button-group">
        {isPaused ? (
          <button className="btn-custom" onClick={() => setIsPaused(false)}>
            <FaPlay size={16}></FaPlay>
          </button>
        ) : (
          <button className="btn-custom" onClick={() => setIsPaused(true)}>
            <FaPause size={16}></FaPause>
          </button>
        )}
        <button
          className="btn-custom"
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
          className="btn-custom break-btn"
          onClick={() => setModalShow(true)}
        >
          <RiCupFill size={22}></RiCupFill>
        </button>
      </div>
      <Modal
        isShowing={modalShow}
        onHide={() => setModalShow(false)}
        setTimer={(minute) => setTimer(minute)}
        setTask={(task) => setTask(task)}
      />
    </>
  );
};

export default Timer;
