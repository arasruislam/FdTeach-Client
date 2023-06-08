import Container from "../../../components/Container";
import logo from "../../../assets/logo.png";
import avatar from "../../../assets/avatar.png";
import { FaBars } from "react-icons/fa";
import NavItem from "../../../components/NavItems";
import { Link } from "react-router-dom";
// import { toast } from "react-hot-toast";
import Avatar from "../../../components/Avatar";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user } = useAuth();
  return (
    <header className="fixed w-full z-50 shadow bg-white">
      {/* Marque section */}
      <section></section>

      {/* NavBar section */}
      <section>
        <Container>
          <div className="navbar p-0 py-2">
            <div className="navbar-start">
              <Link to="/">
                <div className="normal-case text-xl p-0">
                  <img src={logo} alt="logo" />
                </div>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{NavItem}</ul>
            </div>

            {/* Avatar */}
            <div className="navbar-end hidden lg:flex">
              <div className="dropdown dropdown-bottom dropdown-end">
                <div
                  className="flex gap-2 items-center rounded-full py-1 px-2 shadow cursor-pointer"
                  tabIndex={0}
                >
                  <FaBars />
                  {user ? (
                    <>
                      <div className="avatar" title={user?.displayName}>
                        <div className="w-8 rounded-full">
                          <img src={user?.photoURL} alt="userImage" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="avatar">
                        <div className="w-8 rounded-lg">
                          <img src={avatar} alt="userImage" />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu mt-2 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <Avatar />
                </ul>
              </div>
            </div>

            {/* Mobile Device */}
            <div className="navbar-end lg:hidden">
              <div className="dropdown dropdown-bottom dropdown-end">
                <div
                  className="flex gap-2 items-center rounded-full py-1 px-2 shadow cursor-pointer"
                  tabIndex={0}
                >
                  <FaBars />
                  {user ? (
                    <>
                      <div className="avatar" title={user?.displayName}>
                        <div className="w-8 rounded-full">
                          <img src={user?.photoURL} alt="userImage" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="avatar">
                        <div className="w-8 rounded-lg">
                          <img src={avatar} alt="userImage" />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu mt-2 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {NavItem}
                  {/* {user ? (
                    <>
                      <li>
                        <NavLink
                          to="/profile"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
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
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          login
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/signup"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Sign Up
                        </NavLink>
                      </li>
                    </>
                  )} */}
                  <Avatar />
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </header>
  );
};

export default Header;
