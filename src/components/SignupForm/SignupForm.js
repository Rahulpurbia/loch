import React, { useEffect, useState } from "react";
import "./SignupForm.css";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }, [error]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      console.log("redirecting");
      window.location.replace("https://app.loch.one/welcome")
    } else {
      setError("Please enter a valid email");
    }
  };
  return (
    <form className="d-flex flex-column gap-2 position-relative" onSubmit={handleSubmit}>
      <h4 className="signup-heading">Signup for exclusive access</h4>
      <div className="position-relative">
        <input
          type="text"
          required
          value={email}
          onChange={handleEmailChange}
          name="email"
          placeholder="Your email address"
          className="mt-30 p-block-22"
        />
        <button className="get-started-btn mt-10 pointer">Get Started</button>
        {error && <div className="error-container">{error}</div>}
      </div>
      <div className="mt-30 text-center">
        You’ll receive an email with an invite link to join.
      </div>
    </form>
  );
};

export default SignupForm;
