import React from "react";
import "./Sign.css";
function Sign() {
  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <p>Enter your personal details and start the journey with us.</p>
      <form>
        <label>Name </label>
        <input type="text" name="Name" placeholder="Enter Your Name" />
        <label>Email </label>
        <input type="text" name="Email" placeholder="Enter Your Email" />
        <label>Password </label>
        <input
          type="password"
          name="Subject"
          placeholder="Enter Your Password"
        />
        <label>Confirm Password </label>
        <input
          type="password"
          name="Subject"
          placeholder="Confirm Password
          "
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Sign;
