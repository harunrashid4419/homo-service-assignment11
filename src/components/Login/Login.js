import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
   const { logIn, user } = useContext(AuthContext);

   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   const [error, setError] = useState("");

   const handleLogin = (event) => {
      event.preventDefault();

      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      
      logIn(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError("");

            const currentUser = {
               email: user.email,
            }
            console.log(currentUser);      

            fetch('https://eleventh-assignment-server.vercel.app/jwt', {
               method: 'POST',
               headers: {
                  'content-type': 'application/json'
               },
               body: JSON.stringify(currentUser)
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data)
                  localStorage.setItem('token', data.token);
               })
         })
         .catch((error) => {
            console.error(error);
            setError(error.message);
         });
   };

   useEffect(() => {
      if (user && user?.uid) {
         navigate(from, { replace: true });
      }
   }, [user, from, navigate]);

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
            <p className="text-red-500">{error}</p>
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
