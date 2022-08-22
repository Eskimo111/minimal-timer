import React from "react";
import { IoMdAdd } from "react-icons/io";
import "./tasklist.css";

const TaskList = (props) => {
  return (
    <>
      <button
        className="btn-circle"
        id="add-task-btn"
        onClick={() => props.openModal()}
      >
        <IoMdAdd size={22} />
      </button>
    </>
  );
};

export default TaskList;
