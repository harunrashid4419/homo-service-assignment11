import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
   signInWithPopup,
   updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const logIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const logOut = () => {
      localStorage.removeItem('token')
      setLoading(true);
      return signOut(auth);
   };

   const googleSignIn = (googleProvider) => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         // console.log(currentUser);
         setLoading(false);
         setUser(currentUser);
      });
      return () => {
         unSubscribe();
      };
   }, []);

   const profileUpdate = (profile) => {
      setLoading(true);
      return updateProfile(auth.currentUser, profile);
   };

   const authInfo = {
      createUser,
      logIn,
      user,
      logOut,
      googleSignIn,
      profileUpdate,
      loading,
   };
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default UserContext;
