import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import "./Update.css";

const Update = () => {
   const review = useLoaderData();
   const [displayReview, setDisplayReview] = useState(review);

   const handleSubmit = (event) => {
      event.preventDefault();

      fetch(`http://localhost:5000/review/${review._id}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(displayReview),
      })
        .then(res => res.json())
        .then( data =>{
            console.log(data)
            event.target.reset();
            if(data.modifiedCount > 0){
                toast.info('Update success')
            }
        })
   };

   const handleBlur = (event) => {
      const value = event.target.value;
      const field = event.target.name;
      const newReview = { ...displayReview };
      newReview[field] = value;
      setDisplayReview(newReview);
   };

   return (
      <div className="update-form">
         <div className="update-section">
            <p>Update user review</p>
            <form onSubmit={handleSubmit}>
               <div className="form-control mb-5 mt-5">
                  <input
                     type="text"
                     placeholder="Service Name"
                     name="service_name"
                     className="input input-bordered"
                     value={review.service_name}
                     readOnly
                     onBlur={handleBlur}
                  />
               </div>
               <div className="form-control mb-5">
                  <input
                     type="text"
                     placeholder="Service Id"
                     name="_id"
                     className="input input-bordered"
                     value={review._id}
                     onBlur={handleBlur}
                  />
               </div>
               <textarea
                  id="textarea"
                  className="textarea textarea-primary"
                  placeholder="Update your review"
                  name="review"
                  onBlur={handleBlur}
               ></textarea>
               <input type="submit" value="Submit" className="btn" />
            </form>
         </div>
      </div>
   );
};

export default Update;
