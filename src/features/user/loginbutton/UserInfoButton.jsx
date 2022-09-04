import React from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../user.css";
import { login } from "../userSlice";

const UserInfoButton = (props) => {
  return (
    <>
      {props.isShowing && (
        <button
          className="btn btn-circle"
          id="login-btn"
          onClick={() => props.openModal()}
        >
          <FaUser size={16} />
        </button>
      )}
    </>
  );
};

export default UserInfoButton;
