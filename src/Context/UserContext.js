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

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const logIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const logOut = () => {
      return signOut(auth);
   };

   const googleSignIn = (googleProvider) => {
      return signInWithPopup(auth, googleProvider);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         // console.log(currentUser);
         setUser(currentUser);
      });
      return () => {
         unSubscribe();
      };
   }, []);

   const profileUpdate = (profile) => {
      return updateProfile(auth.currentUser, profile);
   };

   const authInfo = {
      createUser,
      logIn,
      user,
      logOut,
      googleSignIn,
      profileUpdate,
   };
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default UserContext;
