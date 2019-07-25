import React from 'react';
import "./landingpage.css";

import NavigationBar from "../../components/NavigationBar/NavigationBar"
import Hero from "../../components/Hero/Hero"
import HowWeWork from "../../components/HowWeWork/HowWeWork"
import Services from "../../components/Services/Services"
import Footer from "../../components/Footer/Footer"
import MyOrders from "../../Pages/MyOrders/MyOrders.js"
import ContactUs from "../Contact-Us/ContactUs.js"

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div>
                <NavigationBar />
                <Hero />
                <HowWeWork />
                <Services />
                {/* <MyOrders /> */}
                {/* <ContactUs /> */}
                <Footer />
            </div>
         );
    }
}
 
export default LandingPage;