import React from "react";
import Hero from "../../components/Hero/Hero.js";
import HowWeWork from "../../components/HowWeWork/HowWeWork.js";
import Services from "../../components/Services/Services.js";
import CookieConsent, { Cookies } from "react-cookie-consent";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Hero />
        <HowWeWork />
        <Services />
      </div>
    );
  }
}

export default Main;
