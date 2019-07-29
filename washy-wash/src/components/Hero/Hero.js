import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./Hero.scss";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="bg-img">
        <form action="/action_page.php" className="containerhero">
          <h1>Sign-In</h1>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
         <center> <button type="submit" className="btn">
            Sign In</button></center> 
          <center>
            <p>
            Dont't have an acount?  <Link to="/SignUp">Sign Up</Link>
          </p></center>
        </form>
      </div>
    </div>
  );
};
export default Hero;
