import React from "react";
import LandingPage from "./Pages/LandingPage/landingPage";
import Myorders from "./Pages/MyOrders/MyOrders"


import Main from "./Pages/MainPage/Main.js";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
  Switch
} from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";


import ContactUs from "./Pages/Contact-Us/ContactUs";

class App extends React.Component {
  render() {
    return (



      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/contactus" exact component={ContactUs} />
            <Route path="/MyOrders" exact component={Myorders} />
            <Route  path="/SignUp"  component={SignUp} />


            {/* <Router>
          <Switch>
            <LandingPage />
          </Switch>
        </Router> */}
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;

/* <Route exact path="/" render={() => (
              this.state.loggedIn ? (
                <Redirect to="/a" />
              ) : (
                  <h1>It didn't work</h1>
                )
            )} /> */
