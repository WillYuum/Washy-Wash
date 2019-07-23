import React from 'react';
import LandingPage from "./Pages/LandingPage/landingPage"

import ContactUsForm from "./components/ContactUsForm/ContactUsForm"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        <LandingPage />
        {/*CMS*/}
      <ContactUsForm />
      </div>
    );
  }
}
 
export default App;

