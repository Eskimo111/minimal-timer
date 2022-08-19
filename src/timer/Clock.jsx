import React from "react";

const Clock = (props) => {
  return (
    <div className="timer__countdown-clock">
      <p>
        {props.minute}:{props.second > 9 ? props.second : `0${props.second}`}
      </p>
    </div>
  );
};

export default Clock;
