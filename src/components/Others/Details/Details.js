import React, { useContext, useEffect, useState } from "react";
import "./Details.css";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import { toast } from "react-toastify";
import useTitle from "../../../hook/useTitle";

const Details = () => {
   useTitle('Service Details')
   const { user } = useContext(AuthContext);
   const [review, setReview] = useState({});
   
   const details = useLoaderData();
   const { service_name, img, description, price, _id } = details;

   const reviewDetails = {
      name: user?.displayName,
      photoURL: user?.photoURL,
      email: user?.email,
      review: review.review,
      service_name: service_name,
   };

   const handleReviewSubmit = (event) => {
      event.preventDefault();

      fetch("https://eleventh-assignment-server.vercel.app/review", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(reviewDetails),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.acknowledged) {
               toast.success("Review Success");
               event.target.reset();
            }
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
            {user ? (
               <>
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
               </>
            ) : (
               <p>Please login first. then you can review any products. Go to <Link className="text-red-400" to='/login'>Login Page</Link> </p>
            )}
         </div>
      </div>
   );
};

export default Details;
