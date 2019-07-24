import React from 'react'
import "./Services.css"
import ServiceBox from "./ServicesBox/ServiceBox.js"

/**
 * Props for Services-Box model
 * 
 * @prop {string} clothImg -Cloth Image
 * @prop  {string}  clothType -The name of the Cloth
 * @prop {integer} clothPrice = the price of cloth
 * 
 */

class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servicesList:
                [
                    { ID: 1, Photo: "https://www.ghanayello.com/img/gh/h/1500992537-57-k-a-cleaning-and-laundry-services.jpg", Type: "first", Price: 5 },
                    { ID: 2, Photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfmbIoSaf-epiY4wrRfU08gehkIgXMSnRH15DY_7TFBwWT4BA", Type: "first", Price: 5 },
                    { ID: 3, Photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfmbIoSaf-epiY4wrRfU08gehkIgXMSnRH15DY_7TFBwWT4BA", Type: "first", Price: 5 },
                    { ID: 4, Photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfmbIoSaf-epiY4wrRfU08gehkIgXMSnRH15DY_7TFBwWT4BA", Type: "first", Price: 5 },
                    { ID: 5, Photo: "https://s3-media3.fl.yelpcdn.com/bphoto/Uf-keIaU8qnNx8mjhZL5HQ/ls.jpg", Type: "first", Price: 5 },
                    { ID: 6, Photo: "https://webimg.secondhandapp.com/w-i-mgl/5c5d82308c84bb0b5c11ebcd", Type: "first", Price: 5 },
                    { ID: 7, Photo: "http://www.benchmarkcleaning.ca/resources/Cleaning-breakdown.png", Type: "first", Price: 5 },

                ]
        };

    }

    render() {
        return (
            <div>
                <div className="Services-container">
                    {this.state.servicesList.map(Services => <div className="Card1">
                        <ServiceBox clothImg={`${Services.Photo} `}
                            clothType={`${Services.Type} `}
                            clothPrice={`${Services.Price} `}

                        />
                    </div>)}



                </div>
            </div>
        );
    }
}

export default Services;


{/* <div className="Shoes-type">
<Nav.Item>
    <Nav.Link name="MEN" onClick={()=>this.getShoes("men")}>MEN</Nav.Link>
</Nav.Item>
<Nav.Item>
    <Nav.Link name="WOMEN" onClick={()=>this.getShoes("women")}>WOMEN</Nav.Link>
</Nav.Item>
<Nav.Item>
    <Nav.Link name="KIDS" onClick={()=>this.getShoes("kids")}>KIDS</Nav.Link>
</Nav.Item>
</div>


<div className="Shoes">
{this.state.shoes.map(shoes=><div className="Card1"> <Card >
        <Card.Img variant="top" src={`http://localhost:3001/${shoes.Picture} `} />
        <Card.Body>
            <Card.Title>
            {shoes.Title}
            </Card.Title>
            <Card.Text>
            {shoes.Description}
            </Card.Text>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{'$'+shoes.Price}</ListGroupItem>
            </ListGroup>
        </Card.Body>
    </Card></div>)}
    
</div> */}