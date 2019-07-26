import React from 'react';
import LandingPage from "./Pages/LandingPage/landingPage"

import MyOrders from './Pages/MyOrders/MyOrders';
import { BrowserRouter as Router, Redirect, Route, Link, Switch } from "react-router-dom";
import Main from "./Pages/MainPage/Main.js"

import ContactUs from "./Pages/Contact-Us/ContactUs"

import SignUp from "./Pages/SignUp/SignUp.js"
// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Link = require("react-router-dom").Link;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  render() {
    return (
      <div>


        




        <Router>
          <Switch>

{/*       
            <Route path='/dashboard' />
            <Route path='/Main' />
          <Route exact path="/" render={() => (
            this.state.loggedIn ? (
              <Redirect to="/dashboard" />
            ) : (
                <Redirect to ="/Main"/>
              )
          )} /> */}
          <LandingPage />
          {/* <Route exact path="/">
            <Redirect to="/a" render={()=><Main/>} />
        </Route>*/}
          </Switch>
        </Router>





        {/* CMS */}
     
      </div>
    );
  }
}

export default App;


{/* <Route exact path="/" render={() => (
              this.state.loggedIn ? (
                <Redirect to="/a" />
              ) : (
                  <h1>It didn't work</h1>
                )
            )} /> */}