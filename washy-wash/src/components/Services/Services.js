import React from 'react'
import "./Services.css"
servicesList=
[
    {ID:1 , Photo:"https://www.ghanayello.com/img/gh/h/1500992537-57-k-a-cleaning-and-laundry-services.jpg", Title:first, Price:5},
    {ID:1 , Photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfmbIoSaf-epiY4wrRfU08gehkIgXMSnRH15DY_7TFBwWT4BA", Title:first, Price:5},
    {ID:1 , Photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfmbIoSaf-epiY4wrRfU08gehkIgXMSnRH15DY_7TFBwWT4BA", Title:first, Price:5},
    {ID:1 , Photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfmbIoSaf-epiY4wrRfU08gehkIgXMSnRH15DY_7TFBwWT4BA", Title:first, Price:5},
    {ID:1 , Photo:"https://s3-media3.fl.yelpcdn.com/bphoto/Uf-keIaU8qnNx8mjhZL5HQ/ls.jpg", Title:first, Price:5},
    {ID:1 , Photo:"https://webimg.secondhandapp.com/w-i-mgl/5c5d82308c84bb0b5c11ebcd", Title:first, Price:5},
    {ID:1 , Photo:"http://www.benchmarkcleaning.ca/resources/Cleaning-breakdown.png", Title:first, Price:5},
   
]

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
 