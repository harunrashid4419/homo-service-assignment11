import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const PrivateRouter = ({ children }) => {
   const location = useLocation();
   const { user } = useContext(AuthContext);

   if (!user) {
      return (
         <Navigate to="/login" state={{ from: location }} replace></Navigate>
      );
   }
   return children;
};

export default PrivateRouter;
