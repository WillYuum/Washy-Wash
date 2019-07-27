import React from "react";
import LandingPage from "./Pages/LandingPage/landingPage";


import Main from "./Pages/MainPage/Main.js";


import SignUp from "./Pages/SignUp/SignUp.js";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
  Switch} from "react-router-dom";
import ContactUs from "./Pages/Contact-Us/ContactUs";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/contactus" exact component={ContactUs} />
        </Router>
    

        {/* <Router>
          <Switch>
            <LandingPage />
          </Switch>
        </Router> */}
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
