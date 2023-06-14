import { createContext, useState, useEffect } from "react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  /* Register User */
  const registerNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* Login User */
  const loginExitingUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* Register or Login with Google Account */
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  /* Register or Login with Github Account */
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  /* Register or Login with facebook Account */
  const signInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  /* Send Reset Password Email */
  const sendResetPasswordEmail = (email) => {
    setLoading(true);
    return sendResetPasswordEmail(auth, email);
  };

  /* Update User Info */
  const updateUserInfo = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  /* Sign Out User */
  const signOutUser = () => {
    setLoading(true);
    localStorage.removeItem("access-token");
    return signOut(auth);
  };

  /* Logged In Current User */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser || currentUser?.email) {
        axios
          .post(`${import.meta.env.VITE_BASE_URL}/jwt`, {
            email: currentUser?.email,
          })
          .then((res) => {
            localStorage.setItem("access-token", res?.data?.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    registerNewUser,
    loginExitingUser,
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
    sendResetPasswordEmail,
    updateUserInfo,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
