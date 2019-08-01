import React from 'react';
import "./ClothCountBox.scss"
import CounterInput from "react-bootstrap-counter";
class ClothCountBox extends React.Component {
    state = {  }
    render() { 
        return ( 
        <div className="ClothCountBox">
            <div className="Photo">
            <img src={this.props.ClothDetails[0].SRC} alt="Smiley face" height="62" width="80" /> 
            <div className="Details">
                {this.props.ClothDetails[0].Price}
            </div>
            </div>
            
            <div className="Counter">
                <CounterInput  min={0} max={10} onChange={ (value) => { console.log(value) } } value={1}  />
            </div>

        </div>
         )
    }
}
 
export default ClothCountBox;