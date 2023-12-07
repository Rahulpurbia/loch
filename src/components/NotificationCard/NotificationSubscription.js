import React from "react";
import "./Notification.css";
import Bell from "../../Images/bell.svg";

const NotificationSubscription = () => {
  return (
    <div className="notification-container gradient-card pointer h-100">
      <div className="d-flex justify-content-between">
        <div>
          <img src={Bell} alt="clock" width="25px" height="25px" />
        </div>
        <div className="font-500 pointer">Save</div>
      </div>
      <div className="text-17">We will be sending notifications to <br/> you here</div>
      <input type="email" name="email" className="mt-10" />
    </div>
  );
};

export default NotificationSubscription;
