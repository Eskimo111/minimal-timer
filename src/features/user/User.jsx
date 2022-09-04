import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginButton from "./loginbutton/LoginButton";
import UserInfoButton from "./loginbutton/UserInfoButton";
import Message from "./message/Message";
import UserInfo from "./userinfo/UserInfo";
//import LoginButton from "./loginbutton/LoginButton";
//import LoginModal from "./signin/LoginModal

import { clearMessage, fetchUserById, login } from "./userSlice";

const User = () => {
  const [userInfoShow, setUserInfoShow] = useState(false);
  const [messageShow, setMessageShow] = useState(false);
  const isLogin = useSelector((state) => state.user.isLogin);
  const message = useSelector((state) => state.user.message);

  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setMessageShow(true);
      setTimeout(() => {
        setMessageShow(false);
        dispatch(clearMessage());
      }, 2000);
    }, 500);
  }, [message]);
  return (
    <>
      {/*<LoginButton openModal={() => setLoginModalShow(true)} />
      <LoginModal
        isShowing={loginModalShow}
        onHide={() => setLoginModalShow(false)}
      />
      <button
        className="btn btn-square"
        onClick={() => dispatch(login({ id: "SE160947", password: "123456" }))}
      >
        Post
      </button>
      <button
        className="btn btn-square"
        onClick={() => dispatch(fetchUserById("SE160947"))}
      >
        Get
      </button>*/}
      {messageShow && <Message message={message} />}
      {isLogin ? (
        <UserInfoButton
          isShowing={!userInfoShow}
          openModal={() => setUserInfoShow(true)}
        />
      ) : (
        <LoginButton />
      )}
      <UserInfo
        isShowing={userInfoShow}
        onHide={() => {
          setUserInfoShow(false);
        }}
      />
    </>
  );
};

export default User;
