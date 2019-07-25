import React from 'react';
import LandingPage from "./Pages/LandingPage/landingPage"

import MyOrders from './Pages/MyOrders/MyOrders';

import ContactUs from "./Pages/Contact-Us/ContactUs.js"

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
        
        
        <LandingPage /> 
        {/* CMS */}
     
      </div>
    );
  }
}

export default App;

