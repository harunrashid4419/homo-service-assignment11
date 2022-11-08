import React, { useContext, useState } from "react";
import "./Details.css";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Details = () => {
   const { user } = useContext(AuthContext);
   const [review, setReview] = useState({});
   const details = useLoaderData();
   const { service_name, img, description, price } = details;

 
    const reviewDetails = {
        name: user?.displayName,
        photoURL : user?.photoURL,
        review: review.review,
    }

   const handleReviewSubmit = (event) => {
      event.preventDefault();

      fetch("http://localhost:5000/review", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(reviewDetails),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
         });
   };

   const handleBlur = (event) => {
      const value = event.target.value;
      const field = event.target.name;
      const allReview = { ...review };
      allReview[field] = value;
      setReview(allReview);
   };

   return (
      <div className="details-container">
         <div className="details-section">
            <h2>{service_name}</h2>
            <span>Repair Price: Tk {price}</span>
            <p>{description}</p>
            <img src={img} alt="" />
            <textarea
               id="textarea"
               className="textarea textarea-primary"
               placeholder="please give a review"
               onBlur={handleBlur}
               name="review"
            ></textarea>
            <input
               onClick={handleReviewSubmit}
               type="submit"
               value="Submit"
               className="btn"
            />
         </div>
      </div>
   );
};

export default Details;
