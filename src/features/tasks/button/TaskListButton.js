import React from "react";
import { FaListUl } from "react-icons/fa";
import "./taskbutton.css";

const TaskListButton = (props) => {
  return (
    <>
      <button
        className="btn btn-circle"
        id="tasklist-btn"
        onClick={() => props.openModal()}
      >
        <FaListUl size={18} />
      </button>
    </>
  );
};

export default TaskListButton;
