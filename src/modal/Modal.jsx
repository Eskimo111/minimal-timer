import React, { useState } from "react";
import "./modal.css";

const Modal = (props) => {
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
            <form onSubmit={() => handleSubmit()}>
              <p>
                Have a break for
                <input
                  type="number"
                  value={breakTime}
                  onChange={(event) => handleChange(event)}
                  required
                />
                minute
              </p>
              <div className="group-btn">
                <button className="btn-modal" onClick={() => props.onHide()}>
                  Cancel
                </button>
                <button className="btn-modal">Break</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
