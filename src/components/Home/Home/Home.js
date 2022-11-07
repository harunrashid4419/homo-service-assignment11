import React from "react";
import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import Service from "../../Others/Service/Service";

const Home = () => {
   const services = useLoaderData();
   console.log(services);
   return (
      <div className="service-section">
         <div className="services">
            {services.map((service) => (
               <Service key={service._id} service={service}></Service>
            ))}
         </div>
         <Link to='/services'><button className="btn btn-primary mt-10">See All</button></Link>
         
      </div>
   );
};

export default Home;
