import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./Hero.scss";
import {Link} from "react-router-dom";
// import CookieConsent from "react-cookie-consent";
import CookieConsent, { Cookies } from "react-cookie-consent";

const Hero = () => {
  return (
    <div>
      <CookieConsent>
    This website uses cookies to enhance the user experience.
</CookieConsent>
<CookieConsent
    location="bottom"
    buttonText="I accept"
    cookieName="myAwesomeCookieName2"
    style={{ background: "#2B373B" }}
    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
    expires={150}
>
    This website uses cookies to enhance the user experience.{" "}
    <span style={{ fontSize: "10px" }}>
    This bit of text is smaller :O
    </span>
</CookieConsent>
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
