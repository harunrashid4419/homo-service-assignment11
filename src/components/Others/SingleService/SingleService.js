import React from "react";
import { Link } from "react-router-dom";
import "./SingleService.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const SingleService = ({ service }) => {
   const { _id, service_name, img, price, description, rating } = service;
   return (
      <div className="services-container">
         <PhotoProvider>
            <PhotoView src={img}>
               <img src={img} alt="" />
            </PhotoView>
         </PhotoProvider>
         <h2>{service_name}</h2>
         <div className="rating">
            <span>Service Price: TK {price}</span>
            <span>Rating: {rating}</span>
         </div>
         <p>
            {description.length > 100
               ? description.slice(0, 100) + "..."
               : description}
         </p>
         <div className="service-btn">
            <Link to={`/details/${_id}`}>
               <button className="btn btn-outline btn-info">Details</button>
            </Link>
         </div>
      </div>
   );
};

export default SingleService;
