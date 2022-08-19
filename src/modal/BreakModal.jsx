import React, { useState } from "react";
import { RiCupFill } from "react-icons/ri";
import "./breakmodal.css";

const BreakModal = (props) => {
  const [breakTime, setBreakTime] = useState(5);

  const handleChange = (event) => {
    setBreakTime(event.target.value);
  };
  const handleSubmit = (event) => {
    props.setTimer(breakTime);
    props.setTask("Break");
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
                <button className="btn-square">
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
