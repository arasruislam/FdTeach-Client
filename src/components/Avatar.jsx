import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from 'react-hot-toast';

const Avatar = () => {
  const { user, signOutUser } = useAuth();

  // Sign Out Handler
  const signOutHandler = () => {
    signOutUser()
      .then(() => {
        toast.error("Log Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {user ? (
        <>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              profile
            </NavLink>
          </li>
          <li>
            <button className="text-lg" onClick={signOutHandler}>
              log out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Sign Up
            </NavLink>
          </li>
        </>
      )}
    </>
  );
};

export default Avatar;
