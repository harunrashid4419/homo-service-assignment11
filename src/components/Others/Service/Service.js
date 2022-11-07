import React from "react";
import "./Service.css";

const Service = ({ service }) => {
   const { _id, service_name, img, description, price, rating } = service;

   return (
      <div className="service">
         <img src={img} alt="" />
         <h2>{service_name}</h2>
         <div className="service-price">
            <span>Price: TK.{price}</span>
            <span>Rating: {rating}</span>
         </div>
      </div>
   );
};

export default Service;
