import React from "react";
import { FaUser } from "react-icons/fa";
import "./user.css";

const LoginButton = (props) => {
  return (
    <>
      <button
        className="btn-circle"
        id="login-btn"
        onClick={() => props.openModal()}
      >
        <FaUser size={16} />
      </button>
    </>
  );
};

export default LoginButton;
