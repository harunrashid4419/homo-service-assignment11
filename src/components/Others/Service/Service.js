import React from "react";
import "./Service.css";

const Service = ({ service }) => {
   const { service_name, img, price, rating } = service;

   return (
      <div className="service">
         <img src={img} alt="" />
         <h2>{service_name}</h2>
         <div className="service-price">
            <span>Service Price: TK.{price}</span>
            <span>Rating: {rating}</span>
         </div>
      </div>
   );
};

export default Service;
