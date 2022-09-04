import React, { useState } from "react";
import { FaListUl } from "react-icons/fa";
import AddTaskModal from "../addtaskmodal/AddTaskModal";
import AddTaskButton from "../button/AddTaskButton";
import TaskItem from "./TaskItem";
import "./tasklist.css";

const TaskList = (props) => {
  const [addModalShow, setAddModalShow] = useState(false);
  return (
    <>
      {props.isShowing && (
        <div className="tasklist">
          <div className="tasklist__header">
            <FaListUl size={22} />
            <h3>Tasklist</h3>
            <p onClick={() => props.onHide()}>Hide</p>
          </div>
          <ul>
            {props.tasklist !== null ? (
              props.tasklist.map((item, index) => {
                return <TaskItem key={index} data={item} />;
              })
            ) : (
              <></>
            )}
          </ul>
          <AddTaskButton openModal={() => setAddModalShow(true)} />
        </div>
      )}

      <AddTaskModal
        isShowing={addModalShow}
        onHide={() => setAddModalShow(false)}
      />
    </>
  );
};

export default TaskList;
