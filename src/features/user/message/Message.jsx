import React from "react";
import "./message.css";

const Message = (props) => {
  return (
    <>
      {props.message !== "" && <div className="message">{props.message}</div>}
    </>
  );
};

export default Message;
