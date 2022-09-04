import { setTaskList } from "features/tasks/tasksSlice";
import React from "react";
import { FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../userSlice";
import "./userinfo.css";

const toMinute = (second) => {
  return `${Math.floor(second / 60)}`;
};

const UserInfo = (props) => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  return (
    <>
      {props.isShowing && (
        <div className="user-info">
          <div>
            <h3>
              <FaUser size={16} /> User Info
            </h3>
            <span onClick={() => props.onHide()}>
              Hide <RiArrowDropRightLine size={24} />
            </span>
          </div>
          <p>
            <b>User ID: </b>
            {userInfo.id}
          </p>
          <p>
            <b>User email:</b> {userInfo.email}
          </p>
          <p>
            <b>Time Focus Today:</b> {toMinute(userInfo.timeFocusToday)}{" "}
            minute(s)
          </p>
          <p>
            <b>Time Focus This Week:</b> {toMinute(userInfo.timeFocusThisWeek)}{" "}
            minute(s)
          </p>
          <div className="btn-group">
            <button
              className="btn btn-square btn-anti"
              onClick={() => {
                dispatch(logout());
                dispatch(setTaskList(null));
                props.onHide();
              }}
            >
              <IoMdLogOut />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfo;
