import React from 'react';
import LandingPage from "./Pages/LandingPage/landingPage"
import ViewOrders from "./components/ViewOrders/ViewOrders"
import MyOrders from './Pages/MyOrders/MyOrders';

import ContactUs from "./Pages/Contact-Us/ContactUs.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }
  render() { 
    return (  
      <div>
        {/* <ContactUs /> */}
        {/* <MyOrders /> */}
        {/* <ViewOrders /> */}
         {/* <LandingPage />  */}
        {/* CMS */}
      </div>
    );
  }
}
 
export default App;

