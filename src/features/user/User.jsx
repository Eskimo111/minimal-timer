import React, { useState } from "react";
import LoginButton from "./loginbutton/LoginButton";
import LoginModal from "./loginmodal/LoginModal";

const User = () => {
  const [loginModalShow, setLoginModalShow] = useState(false);

  return (
    <>
      <LoginButton openModal={() => setLoginModalShow(true)} />
      <LoginModal
        isShowing={loginModalShow}
        onHide={() => setLoginModalShow(false)}
      />
    </>
  );
};

export default User;
