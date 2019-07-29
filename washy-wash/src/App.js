import React from "react";
import LandingPage from "./Pages/LandingPage/landingPage";
import Myorders from "./Pages/MyOrders/MyOrders";

import Main from "./Pages/MainPage/Main.js";
import CMS from "./CMS/pages/CmsPage/Cms.js";
import { Redirect, Route, Link, Switch, withRouter } from "react-router-dom";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/cms" render={() => <CMS />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
