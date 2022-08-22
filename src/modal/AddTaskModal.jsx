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
            <h2>Add a task</h2>
            <form onSubmit={() => handleSubmit()}>
              <div className="form-row">
                <label>Task name:</label>
                <input
                  type="text"
                  size="10"
                  value={taskName}
                  onChange={(event) => handleChangeTaskName(event)}
                />
              </div>
              <div className="form-row">
                <label>Task duration: </label>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={taskDuration}
                  onChange={(event) => handleChangeTaskDuration(event)}
                />
              </div>
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
