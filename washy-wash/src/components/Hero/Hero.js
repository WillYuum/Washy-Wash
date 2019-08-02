import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./Hero.scss";
import { Link } from "react-router-dom";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
    };
  }


    

  // async componentDidMount() {
  //   try {
  //     const url = new URL("http://localhost:8000/api/login");

  //     let headers = {
  //       Authorization:
  //         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU2MzUyMTE1NywiZXhwIjoxNTYzNTI0NzU3LCJuYmYiOjE1NjM1MjExNTcsImp0aSI6IktIVEpQWWN1WUVxcjliZ1kiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZQBucL9PWPcQGjBbAPZrhj0blKdFOkntO1VIo9enN5M",
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     };

  //     let body = new FormData();
  //     body.append("email","admin@admin.com");
  //     body.append("password", "password");
  //     await fetch(url, {
  //       method: "POST",
  //       body: body
  //     })

  //   }catch(err){
  //     console.log(err)
  //   }
  


   Gettoken = async (email, password) => {
    const url = new URL("http://localhost:8000/api/login");
    try {
      let body = new FormData();
      body.append("email", email);
      body.append("password", password);
      const req = await fetch(url, {
        method: "POST",
        body: body
      });
      const res = await req.json();
      console.log("HERE=======>",res);
      localStorage.setItem(res.token)
    } catch (err) {
      console.log(err);
    }
  };

  onChange =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    return (
      <div>
        <div className="bg-img">
          <form onSubmit={()=>this.Gettoken(this.state.email,this.state.password)} className="containerhero">
            <h1>Sign-In</h1>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              required
            />
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={this.state.password}
              required
              onChange = {this.onChange}
            />
            <center>
              {" "}
              <button type="submit" className="btn" onClick={this.Gettoken(this.state.email,this.state.password)} >
                Sign In
              </button>
            </center>
            <center>
              <p>
                Dont't have an acount? <Link to="/SignUp">Sign Up</Link>
              </p>
            </center>
          </form>
        </div>
      </div>
    );
  }
}

export default Hero;
