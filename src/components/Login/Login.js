import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

   return (
      <div className="registration-section">
         <h1 className="text-center text-4xl text-orange-500">Please Login</h1>
         <form onSubmit={handleLogin}>
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
               <label className="label">
                  <Link className="label-text-alt link link-hover">
                     Forgot password?
                  </Link>
               </label>
            </div>
            <div className="form-control mt-6">
               <button className="btn btn-primary">LogIn</button>
               <p className="text-center py-5">
                  Don't have any account{" "}
                  <Link className="text-success" to="/register">
                     Register
                  </Link>{" "}
               </p>
            </div>
         </form>
      </div>
   );
};

export default Login;
