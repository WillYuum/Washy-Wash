import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./Hero.scss";
import { Link } from "react-router-dom";
import CookieConsent, { Cookies } from "react-cookie-consent";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  getToken = async (email, password) => {
    try {
      let body = new FormData();
      body.append("email", email);
      body.append("password", password);
      const req = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        body
      })
      const res = await req.json();
      console.log("HERE===============>", res.token)
      localStorage.setItem(res.token)
    } catch (err) {
      console.log("it didn't work :(")
      console.log(err);
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = () => {
    let { email, password } = this.state;
    this.getToken(email, password);
    this.setState({ email: "", password: "" })
  }

  render() {
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
          <form className="containerhero">
            <h1>Sign-In</h1>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <center> <button onClick={this.onSubmit} className="btn">
              Sign In</button></center>
            <center>
              <p>
                Dont't have an acount?  <Link to="/SignUp">Sign Up</Link>
              </p></center>
          </form>

        </div>
      </div>
    )
  }
}
export default Hero;
