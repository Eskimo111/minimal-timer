import React, { useState } from "react";
import "./addtaskmodal.css";

const AddTaskModal = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDuration, setTaskDuration] = useState(0);

  const handleChangeTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const handleChangeTaskDuration = (event) => {
    setTaskDuration(event.target.value);
  };

  const handleSubmit = (event) => {
    props.setTimer(taskDuration);
    props.setTask(taskName);
    props.onHide();
    event.preventDefault();
  };
  return (
    <>
      {props.isShowing && (
        <div className="modal" id={props.id}>
          <div className="modal-body">
            <form onSubmit={() => handleSubmit()}>
              <label>
                Task name:
                <input
                  type="text"
                  value={taskName}
                  onChange={(event) => handleChangeTaskName(event)}
                />
              </label>
              <label>
                Task duration:
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={taskDuration}
                  onChange={(event) => handleChangeTaskDuration(event)}
                />
                minute(s)
              </label>
              <div className="group-btn">
                <button className="btn-square" onClick={() => props.onHide()}>
                  Cancel
                </button>
                <button className="btn-square">Set Timer</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTaskModal;
