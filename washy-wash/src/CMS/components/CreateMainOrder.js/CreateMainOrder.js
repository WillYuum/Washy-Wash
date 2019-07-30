import React from 'react';
import "./CreateMainOrder.scss"

class CreateMainOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
         

         
    }
    render() { 
        return ( 
        <div>
            <div className="CreateMainOrder-Header">  
                <h6>CreateOrder</h6>
            </div>
            <div className="CreateMainOrder">
                <div className="box"> <div className="CreateMainOrder-text"> 1</div></div>
                <div className="box"> <div className="CreateMainOrder-text"> 2</div></div>
                <div className="box"><div className="CreateMainOrder-text"> 3</div> </div>
                <div className="box"><div className="CreateMainOrder-text"> 4</div></div>
                <div className="box"> <div className="CreateMainOrder-text"> 5</div></div>
                <div className="box"><div className="CreateMainOrder-text"> 6</div> </div>
                <div className="box"><div className="CreateMainOrder-text"> 7</div></div>
                <div className="box"><div className="CreateMainOrder-text"> 8</div> </div>
                <div className="box"><div className="CreateMainOrder-text"> 9</div></div>

            </div>
            </div>
         );
    }
}
 
export default CreateMainOrder;