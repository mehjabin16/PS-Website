import React, { useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactRoundedImage from "react-rounded-image";

// import sections
import ParallaxImage from "../components/elements/ParallaxImage";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
   
  <div style={{ width: "100%", height: "100%"}}>
    <ParallaxProvider>
       <img
       src={require("./../assets/images/team.jpg")}
       style={{
         display: "block",
         width: "100%",
         marginTop: "10%",
       }}
     />
      <div style={{ display: "block" }}>
        <div style={{ padding:"24" ,marginTop:"35px", textAlign:"center"}} >
           <span style={{fontSize:"16px", letterSpacing: "3.5px"}}>
              
           </span>
           <h1 style={{marginTop:5}}>Meet The Team</h1>
           <hr style={{  height: 3, width:"70%"}}/>
        </div>
        <div style={{ padding:"24px"  }}>
           <div style={{ padding:"24px", marginTop:"10px" }}>
            <span style={{ marginTop:"20%", textAlign:"justify"}}>
           <p> The ones who made the magic possible. 
            Presenting the New Executive Committee of IUT Photographic Society (IUTPS) for the Academic Year 
           (2021-2022) </p>

            </span>
           </div>
           
           <img
            src={require("./../assets/images/Team2.jpg")}
            style={{
              display: "block",
              width: "100%"
            }}
          />
        </div>
      </div>
    
       <div style={{ padding:"24px"  }}>
       <img
            src={require("./../assets/images/team3.jpg")}
            style={{
              display: "block",
              width: "100%",
              marginTop: "10%",
            }}
          />
           <div style={{ padding:"24px", marginTop:"20px" }}>
            <span style={{ marginTop:"20%", textAlign:"justify"}}>
              <h2> The PS Corner</h2>
              A place for getting indulged into all the fun and 'adda's'. 
              The corner for PS members.
            </span>
           </div>
        </div>
       <hr style={{  height: 2, width:"95%"}}/>
         
        <div style={{marginLeft:"45%"}}>
          <ReactRoundedImage 
           image={require("./../assets/images/Photo1.jpg")} 
           roundedSize="0" 
           imageWidth="110" 
           imageHeight="110"
           />
        </div>
     

      </ParallaxProvider>
    </div>

      
    
  );
};

export default About;