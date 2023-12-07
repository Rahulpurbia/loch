import React from "react";
import "./style.css";
import Slider from "../../components/NotificationCarousel/NotificationCarousel";
import Bell from "../../Images/bell-white.svg";
import Cohorts from "../../Images/Cohorts.jpg";
import VectorImage from "../../Images/Vector.svg";
import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel";
import SignupForm from "../../components/SignupForm/SignupForm";

const Login = () => {
  return (
    <div className="main-container">
      <div className="login-container d-flex minheight-100">
        <div className="left-section">
          <div className="small-screen-signup">
            <SignupForm />
          </div>
          <div className="d-flex gap-5 d-900-none">
            <div className="d-flex flex-column get-notified-section position-relative">
              <img src={Bell} alt="clock" width="30px" height="30px" />
              <div className="mt-10 text-30">
                Get notified when a highly correlated whale makes a move
              </div>
              <p className="mt-10">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </div>
            <div className="position-relative slider-wrapper">
              <Slider />
            </div>
          </div>
          <div className="d-flex text-right mt-40 align-items-center gap-5 d-900-none">
            <div className="flex-1-4 text-left">
              <img
                src={Cohorts}
                alt="clock"
                width="290px"
                height="260px"
                className="position-relative br-8px"
              />
            </div>
            <div className="d-flex flex-column get-notified-section position-relative align-items-end mr-35 pl-35 flex-1">
              <img src={Bell} alt="bell" width="30px" height="30px" />
              <div className="mt-10 text-30">
                Watch what the whales are doing
              </div>
              <p className="mt-10">
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </p>
            </div>
          </div>
          <div className="border-bottom d-900-none"></div>

          <div className="d-flex gap-5 position-relative align-items-end d-900-none">
            <img src={VectorImage} alt="bell" width="50px" height="50px" />
            <TestimonialCarousel />
          </div>
        </div>
        <div className="right-section d-flex justify-content-center align-items-center">
          <SignupForm type="default" />
        </div>
      </div>
    </div>
  );
};

export default Login;
