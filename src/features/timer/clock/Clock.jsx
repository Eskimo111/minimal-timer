import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePause, updateTimeLeft } from "../timerSlice";
import alarm from "../../../asset/sounds/alarm.mp3";
const audio = new Audio(alarm);

const Clock = (props) => {
  const timeLeft = useSelector((state) => state.timer.timeLeft);
  const isPaused = useSelector((state) => state.timer.isPaused);
  const dispatch = useDispatch();
  const minute = Math.floor(timeLeft / 60);
  const second = timeLeft % 60;

  useEffect(() => {
    if (!timeLeft) return () => ringBell();
    const timerId = setInterval(() => {
      if (isPaused) return;
      dispatch(updateTimeLeft());
    }, 1000);
    return () => clearInterval(timerId);
  });

  function ringBell() {
    audio.play();
    if (!isPaused) dispatch(togglePause);
  }
  return (
    <div className="timer__countdown-clock">
      <p>
        {minute}:{second > 9 ? second : `0${second}`}
      </p>
    </div>
  );
};

export default Clock;
