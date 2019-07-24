import React from 'react';
import "./ServicesBox.css"

const ServiceBox = ({clothImg,clothType,clothPrice}) => {
    return ( 
        <div className = "ServicesBox-container">
            <div className ="ServicesBox-imgSection">
                <img className = "ServicesBox-img" src={clothImg} alt="Image"/>
            </div>
            <div className = "Services-body">
                <p>{clothType}</p>
                <p>{clothPrice}</p>
            </div>
        </div>
     );
}
 
export default ServiceBox;