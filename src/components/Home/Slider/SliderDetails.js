import React from "react";
import { Link } from "react-router-dom";
import "./SliderDetails.css";

const SliderDetails = ({ slider }) => {
   const { image, id, next, previous } = slider;
   return (
      <div id={`slide${id}`} className="carousel-item relative w-full">
         <img
            id="slider-img"
            src={image}
            className="w-full img-slider"
            alt=""
         />
         <div className="slider-caption">
            <h2>
               Do you want to get the <br /> fridge repaired?
            </h2>
            <p>
               There is something wrong with your fridge. Unable to repair due
               to lack of skilled workers. Work done by our skilled workers. Get
               in touch with us immediately.
            </p>
            <Link to='/services'><button className="btn btn-success">See Service</button></Link>
         </div>
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${previous}`} className="btn btn-circle">
               ❮
            </a>
            <a href={`#slide${next}`} className="btn btn-circle">
               ❯
            </a>
         </div>
      </div>
   );
};

export default SliderDetails;
