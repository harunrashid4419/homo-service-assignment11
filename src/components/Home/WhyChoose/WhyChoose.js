import React from "react";
import "./WhyChoose.css";
import serviceImg from "../../../assets/istockphoto-928076872-612x612.jpg";

const WhyChoose = () => {
   return (
      <div className="choose-container">
         <h1>Why Choose Us</h1>
         <div className="choose-section">
            <div>
               <img src={serviceImg} alt="" />
            </div>
            <div className="choose-content">
               <div>
                  <h1>Always there for you </h1>
                  <p>
                     We are always here if you need Kos servicing. We are at
                     your side for any service at any time. We work very
                     carefully.
                  </p>
                  <button className="btn btn-active btn-primary">Learn More</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default WhyChoose;
