import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "../firebaseConfig.js"; // Import Firebase initialization

const Login = () => {
  const auth = getAuth(firebaseApp); // Pass the initialized app to getAuth
  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User Info:", result.user);
      })
      .catch((error) => {
        console.error("Login Error:", error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
