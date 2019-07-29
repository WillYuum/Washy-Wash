import React from 'react';
import LandingPage from "./Pages/LandingPage/landingPage";
import Myorders from "./Pages/MyOrders/MyOrders";


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
import CreateOrderMain from './CMS/components/createOrder /CreateOrderMain';

class App extends React.Component {
  state={
    
  }
  render() {
    return (



      <div>
                  

          <Switch>
          <Route path="/"  exact component={LandingPage} />
          <Route path="/cms"    render={()=>(<CreateOrderMain/>)} />
           }
           
          </Switch>
      </div>

    );
  }
}

export default withRouter(App);

