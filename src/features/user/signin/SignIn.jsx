import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../userSlice";
import "./signin.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = useSelector((state) => state.user.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    dispatch(login({ id: email, password: password }));
    navigate("/");
    return;
  };

  const loginSuccess = () => {};

  return (
    <>
      <h2>Login</h2>
      <div class="ball b1">
        <span class="shadow"></span>
      </div>
      <div class="ball b2">
        <span class="shadow"></span>
      </div>
      <div className="modal-body">
        <form onSubmit={() => handleSubmit()}>
          <div className="form-row">
            <label>User id:</label>
            <input
              type="text"
              size="10"
              value={email}
              onChange={(event) => handleChangeEmail(event)}
            />
          </div>
          <div className="form-row">
            <label>Password </label>
            <input
              type="password"
              value={password}
              onChange={(event) => handleChangePassword(event)}
            />
          </div>
          <div className="group-btn">
            <Link to="/" className="btn btn-square btn-anti" id="cancel-button">
              Cancel
            </Link>
            <button
              type="button"
              className="btn btn-square btn-anti"
              onClick={() => handleSubmit()}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
