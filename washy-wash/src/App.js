import React from "react";
import LandingPage from "./Pages/LandingPage/landingPage";
import Myorders from "./Pages/MyOrders/MyOrders"


import Main from "./Pages/MainPage/Main.js";

import {
  
  Redirect,
  Route,
  Link,
  Switch, 
  withRouter
} from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";


import ContactUs from "./Pages/Contact-Us/ContactUs";

class App extends React.Component {
  render() {
    return (



      <div>
       
          <Switch>
            <Route path="/"  component={LandingPage} />
            

            {/* <Router>
          <Switch>
            <LandingPage />
          </Switch>
        </Router> */}
          </Switch>
      </div>

    );
  }
}

export default withRouter(App);

/* <Route exact path="/" render={() => (
              this.state.loggedIn ? (
                <Redirect to="/a" />
              ) : (
                  <h1>It didn't work</h1>
                )
            )} /> */
