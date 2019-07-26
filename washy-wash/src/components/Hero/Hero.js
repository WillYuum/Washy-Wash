
import React from 'react';
import {Jumbotron,Button} from 'react-bootstrap';
import './Hero.css'

const  Hero=() =>{
    return (
        <div>


 
  
  <div className="bg-img">
  <form action="/action_page.php" className="containerhero">
    <h1>SingIn</h1>
    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />
    <button type="submit" className="btn">Login</button>
  </form>
  


  </div>
 

</div>




        
    );
}
export default Hero;