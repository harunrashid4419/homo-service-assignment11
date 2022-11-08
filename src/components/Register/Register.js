import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import "./Register.css";
import { toast } from "react-toastify";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');


    const handleSubmit = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
            .then(result =>{
                const user = result.user;
                setError('');
                navigate('/login');
                toast.success('Registration success');
            })
            .catch( error => {
                console.error(error);
                setError(error.message)
            })
    }

   return (
      <div className="registration-section">
         <h1 className="text-center text-4xl text-orange-500">
            Please Register
         </h1>
         <form onSubmit={handleSubmit}>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Enter Name</span>
               </label>
               <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
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
                  required
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
                  required
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
                  required
               />
            </div>
            <p className="text-red-500 mt-3 ">{error}</p>
            <div className="form-control mt-6">
               <button className="btn btn-primary">Register</button>
               <p className="text-center py-5">
                  Already have an account{" "}
                  <Link className="text-success" to="/login">
                     Login
                  </Link>{" "}
               </p>
            </div>
         </form>
      </div>
   );
};

export default Register;