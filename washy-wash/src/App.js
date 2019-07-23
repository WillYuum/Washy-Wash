import React from 'react';
import LandingPage from "./Pages/LandingPage/landingPage"
import ViewOrders from "./components/ViewOrders/ViewOrders"
import MyOrders from './Pages/MyOrders/MyOrders';

import ContactUsForm from "./components/ContactUsForm/ContactUsForm"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        {/* <MyOrders /> */}
        {/* <ViewOrders /> */}
         <LandingPage /> 
        {/* CMS */}
      </div>
    );
  }
}
 
export default App;

