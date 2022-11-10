import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ShowReview.css";

const ShowReview = ({ userReview, handleDelete, reviewLength }) => {
   const { service_name, review, _id } = userReview;
   
   return (
      <div className="main-container">
         <div className="show-review-container">
            <h1>Service Name: {service_name}</h1>
            <h1>Id: {_id}</h1>
            <p>Review: {review}</p>
            <div className="service-btn">
               <button onClick={() => handleDelete(_id)} className="delete-btn">
                  Delete
               </button>
               <Link to={`/update/${_id}`}>
                  <button className="update-btn">Update</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ShowReview;
