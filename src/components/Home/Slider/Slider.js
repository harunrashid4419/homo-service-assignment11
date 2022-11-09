import React from "react";
import firstImg from '../../../assets/New Project.png';
import secondImg from '../../../assets/img3.png';
import thirdImg from '../../../assets/img2.png';
import SliderDetails from "./SliderDetails";


const Slider = () => {

    const sliderData = [
        {
            image: firstImg,
            previous: 3,
            id: 1,
            next: 2
        },
        {
            image: secondImg,
            previous: 1,
            id: 2,
            next: 3
        },
        {
            image: thirdImg,
            previous: 2,
            id: 3,
            next: 1
        },
    ]

   return (
        <div className="carousel w-full">
            {
                sliderData.map(slider => <SliderDetails key={slider.id} slider={slider}></SliderDetails>)
            }
        </div> 
   );
};

export default Slider;
