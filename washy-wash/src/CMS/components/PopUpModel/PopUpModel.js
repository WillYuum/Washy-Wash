import React from 'react';
import {Button, Modal, Form} from 'react-bootstrap'
import "./PopUpModel.scss"
import   ClothCountBox from "./ClothCountBox.js"
import PopUpSearch from "./PopUpSearch.js"
import "./ClothCountBox.scss"
import CounterInput from "react-bootstrap-counter";
             class MyVerticallyCenteredModal  extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = {
                           
                        
                    };
                }  
                
              
                 render() { 
                return (
                  <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header closeButton>
                        <div>
                      <Modal.Title id="contained-modal-title-vcenter">
                       Customer Name:  <PopUpSearch />
                      </Modal.Title>
                        </div>
                        
                    </Modal.Header>
                   
                    <Modal.Body>
                    <h6>Choose cloth</h6>
                        <div className="ModalBody-ScrollBar">
                        {this.props.ClothDetails.map(Cloth=>{return (
                        <div className="ModalBody-ClothBox" > 


                          <div className="ClothCountBox">
                                      <div className="Photo">
                                      <img src={Cloth.SRC} alt="Smiley face" height="62" width="80" /> 
                                      <div className="Details">
                                          {Cloth.Price}
                                      </div>
                                      </div>
            
                                    <div className="Counter">
                                        <CounterInput  min={0} max={10} onChange={ (value) => { console.log(value) } } value={1}  />
                                    </div>

                          
                        {/* <ClothCountBox  ClothDetails={this.props.ClothDetails}/> */}
                        </div>
                        </div>
                         )} 
                         )}
                        
                        </div>
                    </Modal.Body>

                    <Modal.Footer className="ModalFooter">
                        
                        <Form >
                        
                         <Form.Group className="ModalSubmitForm" controlId="exampleForm.ControlTextarea1">
                         <Form.Label>Order Details</Form.Label>
                        <Form.Control as="textarea" rows="2" />
                         </Form.Group>
                         </Form>
                         
                         <div className="TotalPrice">
                         <p>Total Price:50</p>
                         {/* <Button onClick={this.props.onHide}>Close</Button> */}
                         <Button onClick={this.props.onHide}>Confirm Order</Button>
                         </div>
                    </Modal.Footer>
                  </Modal>
                );
              }
            
        }
         export default MyVerticallyCenteredModal;