import React, { useState } from "react";
import { RiCupFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setTimer } from "../timerSlice";
import "./breakmodal.css";

const BreakModal = (props) => {
  const [breakTime, setBreakTime] = useState(5);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setBreakTime(event.target.value);
  };
  const handleSubmit = (event) => {
    //props.setTimer("Break", breakTime);
    dispatch(setTimer({ taskname: "Break", session: breakTime }));
    props.onHide();
    event.preventDefault();
  };
  return (
    <>
      {props.isShowing && (
        <div className="modal" id={props.id}>
          <div className="modal-body">
            <p onClick={() => props.onHide()}>x</p>
            <form onSubmit={() => handleSubmit()}>
              <p>
                Have a break for
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={breakTime}
                  onChange={(event) => handleChange(event)}
                  required
                />
                minute(s)
              </p>
              <div className="group-btn">
                <button className="btn btn-square">
                  <RiCupFill size={22} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BreakModal;
