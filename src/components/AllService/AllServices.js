import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleService from "../Others/SingleService/SingleService";
import "./AllService.css";

const AllServices = () => {
   const services = useLoaderData();

   return (
      <div className="service-section">
         <h1>OUR SERVICES</h1>
         <div className="allService-container">
            {services.map((service) => (
               <SingleService
                  key={service._id}
                  service={service}
               ></SingleService>
            ))}
         </div>
      </div>
   );
};

export default AllServices;
