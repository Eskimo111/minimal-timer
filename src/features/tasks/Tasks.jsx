import React, { useState } from "react";
import AddTaskButton from "./addtaskbutton/AddTaskButton";
import AddTaskModal from "./addtaskmodal/AddTaskModal";
import "./tasks.css";

const Tasks = () => {
  const [addModalShow, setAddModalShow] = useState(false);
  return (
    <>
      <AddTaskButton openModal={() => setAddModalShow(true)} />
      <AddTaskModal
        isShowing={addModalShow}
        onHide={() => setAddModalShow(false)}
      />
    </>
  );
};

export default Tasks;
