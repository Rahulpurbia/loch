import React from "react";
import "./Notification.css";
import Clock from "../../Images/clock.svg";
import CheckMark from "../../Images/Checkmark.svg";

const NotificationCard = () => {
  return (
    <div className="notification-container pointer h-100">
      <div className="d-flex justify-content-between">
        <div>
          <img src={Clock} alt="clock" width="25px" height="25px" />
        </div>
        <div>
          <img src={CheckMark} alt="clock" width="15px" height="15px" />
        </div>
      </div>
      <div>
        <div className="mt-10 mb-10 font-500">
          Notify me when any wallet dormant for
        </div>
        <div>
          {/* not making it controlled using state for now */}
          <select className="text-15">
            <option>$1000.00</option>
            <option>$2000.00</option>
            <option>$3000.00</option>
            <option>$4000.00</option>
            <option>$5000.00</option>
          </select>
          <div className="font-500 mt-10">becomes active</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
