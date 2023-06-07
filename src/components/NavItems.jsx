import { NavLink } from "react-router-dom";

const NavItem = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/instructors"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Instructors
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/classes"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Classes
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Dashboard{" "}
      </NavLink>
    </li>
  </>
);

export default NavItem;
