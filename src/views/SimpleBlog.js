import React, { useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactRoundedImage from "react-rounded-image";

// import sections
import ParallaxImage from "../components/elements/ParallaxImage";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const SimpleBlog = () => {
  return (
   
  <div style={{ width: "100%", height: "100%"}}>
    <ParallaxProvider>
      <ParallaxImage 
       imgsrc={require("./../assets/images/Photo5.jpg")} 
       marginTop="7%"
       height="600px" 
       opacity="1" 
       offset="0.6">
      </ParallaxImage>
      <div style={{ display: "block" }}>
        <div style={{ padding:"24" ,marginTop:"35px", textAlign:"center"}} >
           <span style={{fontSize:"16px", letterSpacing: "3.5px"}}>
              JANUARY 3, 2023 / STREET PHOTOGRPHY
           </span>
           <h1 style={{marginTop:5}}>Image Processing</h1>
           <hr style={{  height: 3, width:"70%"}}/>
        </div>
        <div style={{ padding:"24px"  }}>
           <div style={{ padding:"24px", marginTop:"10px" }}>
            <span style={{ marginTop:"20%", textAlign:"justify"}}>
            Is a good photograph defined by just clicking the shutter at the very right moment?
            No, The real deal is to make it just as vivid as you remember. 
            That's when you need to know basics of post processing techniques, from exposure to lens correction, give photographers the tools to hone their craft in Photoshop and Lightroom.


            </span>
           </div>
            <blockquote style={{ textAlign:"center",fontWeight:"600", fontSize: "28px",fontStyle:"italic", display:"block"}}>
            A visual image in the hand of an artist is merely a tool to trigger a mental image."
                                                                                    - Roy H Williams
            </blockquote>
           <div style={{ padding:"24px", marginTop:"20px" }}>
            <span style={{ marginTop:"20%", textAlign:"justify"}}>
            IUTPS is bringing the most essential session, to guide you step by step of digital post processing.
            This session is about knowing the right way to process your image, to give them extra pop, the much needed depth to make your end result captivating. What's more, you'll learn tweaking your camera settings to create images with optimal data, size and the right format.
            So get ready to make your capture a perfect one, even if it's not.
            </span>
           </div>
        </div>
      </div>
    
      <ParallaxImage 
       imgsrc={require("./../assets/images/Photo4.jpg")} 
       height="500px" 
       opacity="1" 
       offset="0.4">
      </ParallaxImage>
       <div style={{ padding:"24px"  }}>
           <div style={{ padding:"24px", marginTop:"10px" }}>
            <span style={{ marginTop:"20%", textAlign:"justify"}}>
              <h3>
            Lumina Week: 06
             </h3>
            </span>
            <span style={{ marginTop:"20%", textAlign:"justify"}}>
            <h6>
            Topic: Digital Post Processing
            </h6>
            </span>
            <span style={{ marginTop:"20%", textAlign:"justify"}}>
            
            </span>
            <span style={{ marginTop:"20%", textAlign:"justify"}}>
            <p>
            Mentors: Mashiat, Rubayat, Tamzid
            </p>
             <p> Date: Wednesday, January 3, 2023 </p>
             <p> Time: 4:30 PM </p>
             <p> Room No: 203 NAB </p>
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
           
         <span style={{fontSize:"20px",paddingTop:"20px", display:"block", textAlign:"center"}}>
           Author </span>
         <span style={{fontWeight:"500",fontSize:"28px", display:"block", textAlign:"center"}}>
          Nafisa</span>
        <hr style={{  height: 2, width:"95%"}}/>
        <h3 style={{fontSize:"36px", letterSpacing: "2px", display:"block", textAlign:"center"}}>
          You might also like similar events
        </h3>
        <hr style={{  height: 3, width:"10%"}}/>

      </ParallaxProvider>
    </div>

      
    
  );
};

export default SimpleBlog;