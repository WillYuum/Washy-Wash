// import React from 'react'

// class Hero extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 

//          }
//     }
//     render() { 
//         return ( 
//             <div>
// <header className="heropanel--video" data-vide-bg="mp4: https://www.gordonmac.com/wp-content/uploads/storm-1.mp4, poster: https://www.gordonmac.com/wp-content/uploads/storm-1.png" data-vide-options="posterType: png, loop: false, muted: true, position: 50% 50%">
//   <div className="heropanel__content">
//     <iframe width="100%" height="550" src="https://www.youtube.com/embed/zdr0bBXoxjk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//   </div>
// </header>

//             </div>
//          );
//     }
// }
 
// export default Hero;
import React from 'react';
import  "./Hero.css";

export default function MyLandingPage() {
    return (
        <div>
            
<div>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style dangerouslySetInnerHTML={{__html: "\nbody, html {\n  height: 100%;\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.hero-image {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"photographer.jpg\");\n  height: 50%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n.hero-text {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n\n.hero-text button {\n  border: none;\n  outline: 0;\n  display: inline-block;\n  padding: 10px 25px;\n  color: black;\n  background-color: #ddd;\n  text-align: center;\n  cursor: pointer;\n}\n\n.hero-text button:hover {\n  background-color: #555;\n  color: white;\n}\n" }} />
  <div className="hero-image">
    <div className="hero-text">
      <h1 style={{fontSize: 50}}>I am John Doe</h1>
      <p>And I'm a Photographer</p>
      <button>Hire me</button>
    </div>
  </div>
  <p>Page Content..</p>
</div>

        </div>
    );
}