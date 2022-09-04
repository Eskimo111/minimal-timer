import React from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../user.css";
import { login } from "../userSlice";

const LoginButton = () => {
  return (
    <>
      <Link to="/signin" className="btn btn-circle" id="login-btn">
        <FaUser size={16} />
      </Link>
    </>
  );
};

export default LoginButton;
