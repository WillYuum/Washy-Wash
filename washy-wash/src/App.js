import React from 'react';
import LandingPage from "./Pages/LandingPage/landingPage"

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
      </div>
    );
  }
}
 
export default App;

