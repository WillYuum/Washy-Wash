import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import MyVerticallyCenteredModal from '../PopUpModel/PopUpModel.js'
import "./CreateMainOrder.scss"
import {Link} from "react-router-dom";
class CreateMainOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalShow:false
         }
         

         
    }
    
    render() { 
        return ( 
        
        <div>
            <div className="CreateMainOrder-Header">  
                <h6>Create Order</h6>
            </div>
            <div className="CreateMainOrder">
            <Link onClick={() => this.setState({modalShow:true, })} className="box"> <div > <div className="CreateMainOrder-text"> 1</div></div> </Link>
            <Link onClick={() => this.setState({modalShow:true})} className="box"> <div > <div className="CreateMainOrder-text"> 2</div></div> </Link>                
            <Link onClick={() => this.setState({modalShow:true})} className="box"> <div > <div className="CreateMainOrder-text"> 3</div></div> </Link>               
            <Link onClick={() => this.setState({modalShow:true})} className="box"> <div > <div className="CreateMainOrder-text"> 4</div></div> </Link>               
            <Link onClick={() => this.setState({modalShow:true})} className="box"> <div > <div className="CreateMainOrder-text"> 5</div></div> </Link>                
            <Link onClick={() => this.setState({modalShow:true})} className="box"> <div > <div className="CreateMainOrder-text"> 6</div></div> </Link>
            <Link onClick={() => this.setState({modalShow:true})} className="box"> <div > <div className="CreateMainOrder-text"> 7</div></div> </Link>
            <Link onClick={() => this.setState({modalShow:true})} className="box"> <div > <div className="CreateMainOrder-text"> 8</div></div> </Link>
            <Link onClick={() => this.setState({modalShow:true})} className="box"> <div > <div className="CreateMainOrder-text"> 9</div></div> </Link>

            </div>
      

      <MyVerticallyCenteredModal
        show={this.state.modalShow}
        onHide={() => this.setState({modalShow:false})}
        ClothDetails={this.props.ClothDetails}
      />
    
            </div>
         );
    }
}
 
export default CreateMainOrder;