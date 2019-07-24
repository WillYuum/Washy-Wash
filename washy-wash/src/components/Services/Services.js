import React from 'react'
import "./Services.css"

import ServiceBox from "./ServicesBox/ServiceBox.js"


const Services = () => {
    return ( 
        <div className = "Services-container">
            <ServiceBox clothImg = "https://www.rd.com/wp-content/uploads/2018/02/01_Lights_Laundry-Mistakes-You-Didn%E2%80%99t-Know-You-Were-Making_478483900_Evgeny-Atamanenko-760x506.jpg"
                        clothType = "Pants"
                        clothPrice = "$12" />
        </div>
     );
}
 
export default Services;
 