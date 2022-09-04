import React, { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { RiArrowDropUpLine, RiCupFill } from "react-icons/ri";
import { VscRefresh } from "react-icons/vsc";
import { IoMdArrowDropup } from "react-icons/io";

import BreakModal from "../timer/breakmodal/BreakModal";
import Clock from "./clock/Clock";

import "./timer.css";
import alarm from "../../asset/sounds/alarm.mp3";

import { useSelector, useDispatch } from "react-redux";
import {
  setTimer,
  refreshClock,
  refreshTimer,
  togglePause,
} from "../timer/timerSlice";

const audio = new Audio(alarm);

const Timer = () => {
  const taskName = useSelector((state) => state.timer.taskname);
  const session = useSelector((state) => state.timer.session);
  const isPaused = useSelector((state) => state.timer.isPaused);
  const dispatch = useDispatch();

  const [breakModalShow, setBreakModalShow] = useState(false);
  const [buttonGroupShow, setButtonGroupShow] = useState(true);

  return (
    <>
      <div className="timer__task">{taskName}</div>

      <Clock />

      {buttonGroupShow && (
        <div className="timer__button-group">
          {isPaused ? (
            <button
              className="btn btn-circle"
              onClick={() => dispatch(togglePause())}
            >
              <FaPlay size={16}></FaPlay>
            </button>
          ) : (
            <button
              className="btn btn-circle"
              onClick={() => dispatch(togglePause())}
            >
              <FaPause size={16}></FaPause>
            </button>
          )}
          <button
            className="btn btn-circle"
            onClick={() => {
              dispatch(refreshTimer());
              if (!isPaused) dispatch(togglePause());
            }}
          >
            <VscRefresh size={22} />
          </button>
          <hr></hr>
          <button
            className="btn btn-square"
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
        setTimer={(taskname, session) => {
          dispatch(
            setTimer({
              taskname: taskname,
              session: session,
            })
          );
          if (!isPaused) dispatch(togglePause());
        }}
      />
    </>
  );
};

export default Timer;
