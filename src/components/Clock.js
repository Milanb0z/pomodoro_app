import { useState, useEffect } from "react";
import "./Clock.scss";
import tomatoTop from "../assets/tomatotop.svg";
import { BsArrowRepeat } from "react-icons/bs";

const Clock = () => {
  const [seconds, setSeconds] = useState(0);
  const [hour, setHour] = useState(24);

  useEffect(() => {}, [seconds, hour]);

  return (
    <div className="clock">
      <img src={tomatoTop} alt="" className="clock_top" />
      <div className="clock_body">
        <div className="clock_inner">
          <div
            className="clock_inner_second"
            style={{ transform: `rotate(-${(seconds / 60) * 360 + 180}deg)` }}
          ></div>
          <div
            className="clock_inner_hour"
            style={{ transform: `rotate(-${(hour / 25) * 360 + 180}deg)` }}
          ></div>
        </div>
      </div>
      <h2 className="clock_digits">
        {hour} : {seconds.toString().length === 1 ? `0${seconds}` : seconds}
      </h2>
      <div className="clock_actions">
        <div className=""></div>
        <button className="btn">Start</button>
        <BsArrowRepeat className="clock_actions_icon" />
      </div>
    </div>
  );
};

export default Clock;
