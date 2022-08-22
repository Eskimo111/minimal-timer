import React, { useState } from "react";
import "./loginmodal.css";

const LoginModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {props.isShowing && (
        <div className="modal" id={props.id}>
          <div className="modal-body">
            <h2>Login</h2>
            <form onSubmit={() => handleSubmit()}>
              <div className="form-row">
                <label>User email:</label>
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
                <button className="btn-square" onClick={() => props.onHide()}>
                  Cancel
                </button>
                <button className="btn-square">Login</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
