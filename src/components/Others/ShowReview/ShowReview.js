import React from "react";
import "./ShowReview.css";

const ShowReview = ({ userReview, handleDelete }) => {
   const { service_name, review, _id } = userReview;

   console.log(userReview.length)

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
               <button className="update-btn">Update</button>
            </div>
         </div>
      </div>
   );
};

export default ShowReview;
