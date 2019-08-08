import React from "react";
import Hero from "../../components/Hero/Hero.js";
import HowWeWork from "../../components/HowWeWork/HowWeWork.js";
import Services from "../../components/Services/Services.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {getToken} = this.props
    return (
      <div>
        <Hero  getToken={getToken}/>
        <HowWeWork />
        <Services />
      </div>
    );
  }
}

export default Main;
