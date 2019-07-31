import React from "react";
import LandingPage from "./Pages/LandingPage/landingPage";
import Myorders from "./Pages/MyOrders/MyOrders";

import Main from "./Pages/MainPage/Main.js";
import CMS from "./CMS/pages/CmsPage/Cms.js";
import { Route, Link, Switch, withRouter } from "react-router-dom";

class App extends React.Component {
  state = {
    loggedIn: true
  };
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={() => {
              if (this.state.loggedIn) {
                console.log("You are in cms")
                return <CMS />;
              }
              return <LandingPage />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
