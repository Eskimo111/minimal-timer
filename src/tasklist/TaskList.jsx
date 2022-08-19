import React from "react";
import { IoMdAdd } from "react-icons/io";
import "./tasklist.css";

const TaskList = () => {
  return (
    <>
      <button className="btn-circle">
        <IoMdAdd size={24} />
      </button>
    </>
  );
};

export default TaskList;
