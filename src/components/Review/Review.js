import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../hook/useTitle";
import ShowReview from "../Others/ShowReview/ShowReview";
import './Review.css';


const Review = () => {
   const { user, logOut } = useContext(AuthContext);
   const [review, setReview] = useState([]);
   const [reviewlength, setReviewLength] = useState({});
   useTitle('Review')
   
   // if(review.length === 0){
   //    setReviewLength('no review here')
   // }

   useEffect(() => {
      fetch(`https://eleventh-assignment-server.vercel.app/review?email=${user?.email}`, {
         headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
         }
      })
         .then((res) => {
            if(res.status === 401 || res.status === 403){
               return logOut();
            }
            return res.json()
         })
         .then((data) => {
            // console.log(data);
            setReview(data);
         });
   }, [user?.email, logOut]);


   const handleDelete = (id) => {
      const agree = window.confirm(
         `Do you want to delete this review`
      );
      if (agree) {
         fetch(`https://eleventh-assignment-server.vercel.app/review/${id}`, {
            method: "DELETE",
            headers: {
               authorization: `Bearer ${localStorage.getItem('token')}`,
            }
         })
            .then((res) => res.json())
            .then((data) => {
               // console.log(data);
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
               <ShowReview key={r._id} userReview={r} reviewLength={review} handleDelete={handleDelete}></ShowReview>
            ))}
         </div>
      </div>
   );
};

export default Review;
