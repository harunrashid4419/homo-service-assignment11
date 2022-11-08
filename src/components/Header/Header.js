import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import "./Header.css";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
   const { user, logOut } = useContext(AuthContext);

   const handleLogOut = () => {
      logOut()
         .then((result) => {
            const user = result.user;
            console.log(user);
         })
         .catch((error) => console.error(error));
   };

   const menu = (
      <li>
         <Link to="/">Home</Link>

         <Link to='/addService'>Add Service</Link>
         <Link to="/blog">Blog</Link>
         {user ? (
            <>
               <Link to="/services">Service</Link>
               <Link to="/review">My Review</Link>
               <Link onClick={handleLogOut}>LogOut</Link>
               {user.photoURL ? (
                  <img
                     style={{ width: "60px" }}
                     className="ms-3 rounded-circle"
                     src={user?.photoURL}
                     alt=""
                  />
               ) : (
                  <FaUserAlt />
               )}
            </>
         ) : (
            <Link to="/login">LogIn</Link>
         )}
      </li>
   );

   return (
      <div id="navbar" className="navbar bg-base-100">
         <div className="navbar-start w-full">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </label>
               <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
               >
                  {menu}
               </ul>
            </div>
            <Link
               to="/"
               className="btn btn-ghost normal-case text-orange-400 font-bold text-2xl"
            >
               HomoService
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menu}</ul>
         </div>
      </div>
   );
};

export default Header;
