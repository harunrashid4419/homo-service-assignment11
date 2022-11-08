import React from "react";
import { Link } from "react-router-dom";
import './Register.css';
import registerImg from "../../assets/7.webp";

const Register = () => {
   return (
      <div className="registration-section">
         <form>
            <h1 className="text-center text-4xl text-orange-500">Please Register</h1>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Enter Name</span>
               </label>
               <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
               />
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Enter PhotoURL</span>
               </label>
               <input
                  type="text"
                  placeholder="PhotoURL"
                  name="photoURL"
                  className="input input-bordered"
               />
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Email</span>
               </label>
               <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
               />
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Enter Password</span>
               </label>
               <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
               />
            </div>
            <div className="form-control mt-6">
               <button className="btn btn-primary">Register</button>
               <p className="text-center py-5">
                  Already have an account <Link className="text-success" to="/login">Login</Link>{" "}
               </p>
            </div>
         </form>
      </div>
   );
};

export default Register;
