import React from 'react';
import "./landingpage.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import NavigationBar from "../../components/NavigationBar/NavigationBar"
import Hero from "../../components/Hero/Hero"
import HowWeWork from "../../components/HowWeWork/HowWeWork"
import Services from "../../components/Services/Services"
import Footer from "../../components/Footer/Footer"
import MyOrders from "../../Pages/MyOrders/MyOrders.js"
import ContactUs from "../Contact-Us/ContactUs.js"


import Main from "../MainPage/Main.js"

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
                <Router>
                    <Switch>
                        <Route exact path ="/">
                            <Main/>
                        </Route>
        <Route path = "/ContactUs" render={()=><ContactUs/>}/>
                    </Switch>
               </Router>
                <Footer />
            </div>
         );
    }
}
 
export default LandingPage;