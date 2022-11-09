import React from "react";
import { Link } from "react-router-dom";
import {
   FaFacebookF,
   FaGoogle,
   FaInstagram,
   FaWhatsapp,
   FaYoutube,
} from "react-icons/fa";
import './Footer.css';


const Footer = () => {
   return (
      <div className="footer-container">
         <div className="footer-section">
            <div className="left-side">
               <h1>HomoService</h1>
               <p>The top Home service</p>
               <ul>
                  <li>
                     <Link>
                        <FaFacebookF />
                     </Link>
                     <Link>
                        <FaWhatsapp />
                     </Link>
                     <Link>
                        <FaInstagram />
                     </Link>
                     <Link>
                        <FaYoutube />
                     </Link>
                     <Link>
                        <FaGoogle />
                     </Link>
                  </li>
               </ul>
            </div>
            <div className="middle-side">
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Service</Link></li>
                    <li><Link>Add Service</Link></li>
                    <li><Link>My Review</Link></li>
                </ul>
            </div>
            <div className="right-side">
                <h1>Service Time</h1>
                <p>Saturday - Wednesday <span>8.00 - 11.00</span></p>
                <p>Thursday <span>8.00 - 6.00</span></p>
                <p>Friday <span>Closed</span></p>
            </div>
         </div>
        <div className="socket">
            <p style={{backgroundColor: "gray"}} className="text-center text-white py-3 font-semibold">Copyright &copy; 2022 HomoService</p>
        </div>
      </div>
   );
};

export default Footer;
