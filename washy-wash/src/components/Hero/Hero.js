import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./Hero.scss";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="bg-img">
        <form action="/action_page.php" className="containerhero">
          <h1>SignIn</h1>
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
           <button type="submit" className="btn">
            Login</button>
          
            <Link to="/SignUp"> <p>
            SignUp
          </p></Link>
        </form>
      </div>
    </div>
  );
};
export default Hero;
