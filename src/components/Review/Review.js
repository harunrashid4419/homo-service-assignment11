import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../hook/useTitle";
import ShowReview from "../Others/ShowReview/ShowReview";
import './Review.css';


const Review = () => {
   const { user } = useContext(AuthContext);
   const [review, setReview] = useState([]);
   useTitle('Review')
   
   useEffect(() => {
      fetch(`http://localhost:5000/review?email=${user?.email}`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setReview(data);
         });
   }, [user?.email]);


   const handleDelete = (id) => {
      const agree = window.confirm(
         `Do you want to delete this review`
      );
      if (agree) {
         fetch(`http://localhost:5000/review/${id}`, {
            method: "DELETE",
         })
            .then((res) => res.json())
            .then((data) => {
               console.log(data);
               const remainingReview = review.filter(dr => dr._id !== id);
               setReview(remainingReview);
               if(data.deletedCount > 0){
                  toast.success('delete success')
               }
            });
      }
   };

   return (
      <div>
         <div className="review-container">
            <h2>User Review:</h2>
            {review.map((r) => (
               <ShowReview key={r._id} userReview={r} handleDelete={handleDelete}></ShowReview>
            ))}
         </div>
      </div>
   );
};

export default Review;
