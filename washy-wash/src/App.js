import React from 'react';
import LandingPage from "./Pages/LandingPage/landingPage"

import MyOrders from './Pages/MyOrders/MyOrders';

import ContactUs from "./Pages/Contact-Us/ContactUs.js"
import ViewOrders from "./components/ViewOrders/ViewOrders";
import NavigationBar from "./components/NavigationBar/NavigationBar.js"
import Footer from "./components/Footer/Footer.js"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
       {/*  <ViewOrders /> */}
        < MyOrders />
        {/* <LandingPage />  */}
        {/* CMS */}
     
      </div>
    );
  }
}

export default App;

