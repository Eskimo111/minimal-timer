import React from "react";
import { FaPause } from "react-icons/fa";
const PauseButton = () => {
  return (
    <button className="btn">
      <FaPause size={18}></FaPause>
    </button>
  );
};

export default PauseButton;
