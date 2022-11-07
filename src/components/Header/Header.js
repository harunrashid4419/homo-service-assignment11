import React from "react";
import { Link } from "react-router-dom";
import './Header.css';


const Header = () => {

    const menu = (
        <li>
            <Link to='/'>Home</Link>
            <Link to='/services'>Service</Link>
            <Link to='/review'>My Review</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/register'>Register</Link>
            <Link>LogOut</Link>
        </li>
    )

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
            <Link className="btn btn-ghost normal-case text-xl">WifiService</Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
               {menu}
            </ul>
         </div>
      </div>
   );
};

export default Header;
