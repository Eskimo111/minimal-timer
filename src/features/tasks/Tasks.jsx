import React, { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { useSelector } from "react-redux";
import AddTaskButton from "./button/AddTaskButton";
import AddTaskModal from "./addtaskmodal/AddTaskModal";
import TaskList from "./tasklist/TaskList";
import "./tasks.css";
import TaskListButton from "./button/TaskListButton";

const Tasks = () => {
  const [addModalShow, setAddModalShow] = useState(false);
  const [taskListShow, setTaskListShow] = useState(false);
  //const tasklist = useSelector((state) => state.tasks.tasklist);
  const tasklist = useSelector((state) => state.tasks.tasklist);

  return (
    <>
      {!taskListShow && (
        <TaskListButton openModal={() => setTaskListShow(true)}>
          <FaListUl size={22} />
        </TaskListButton>
      )}
      <TaskList
        tasklist={tasklist}
        isShowing={taskListShow}
        onHide={() => setTaskListShow(false)}
      />
      {/*<AddTaskButton openModal={() => setAddModalShow(true)} />
      <AddTaskModal
        isShowing={addModalShow}
        onHide={() => setAddModalShow(false)}
  />*/}
    </>
  );
};

export default Tasks;
