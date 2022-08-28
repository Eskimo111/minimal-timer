import React from "react";
import { IoMdAdd } from "react-icons/io";
import "./taskbutton.css";

const AddTaskButton = (props) => {
  return (
    <>
      <button
        className="btn btn-circle"
        id="add-task-btn"
        onClick={() => props.openModal()}
      >
        <IoMdAdd size={22} />
      </button>
    </>
  );
};

export default AddTaskButton;
