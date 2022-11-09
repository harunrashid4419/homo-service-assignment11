import React from "react";
import "./Service.css";

const Service = ({ service }) => {
   const { service_name, img, price, rating, description } = service;

   return (
      <div className="service">
         <img src={img} alt="" />
         <h2>{service_name}</h2>
         <div className="service-price">
            <span>Service Price: TK.{price}</span>
            <span>Rating: {rating}</span>
         </div>
         <p>
            {description.length > 100
               ? description.slice(0, 100) + "..."
               : description}
         </p>
      </div>
   );
};

export default Service;
