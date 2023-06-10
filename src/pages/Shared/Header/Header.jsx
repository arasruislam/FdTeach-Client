import Container from "../../../components/Container";
import logo from "../../../assets/logo.png";
import avatar from "../../../assets/avatar.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { toast } from "react-hot-toast";
import Avatar from "../../../components/Avatar";
import useAuth from "../../../hooks/useAuth";
import LazyLoad from "react-lazyload";
import NavItems from "../../../components/NavItems";

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
            {/* Logo */}
            <div className="navbar-start">
              <Link to="/">
                <div className="normal-case text-xl p-0">
                  <LazyLoad>
                    <img src={logo} alt="logo" />
                  </LazyLoad>
                </div>
              </Link>
            </div>
            {/* nav Items */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <NavItems />
              </ul>
            </div>

            {/* Avatar */}
            <div className="navbar-end hidden lg:flex">
              <div className="dropdown dropdown-bottom dropdown-end">
                <div
                  className="flex gap-2 items-center rounded-full py-1 px-2 shadow cursor-pointer"
                  tabIndex={0}
                >
                  {user ? (
                    <>
                      <div
                        className="avatar flex items-center gap-1"
                        title={user?.displayName}
                      >
                        <div className="w-8 rounded-full">
                          <img src={user?.photoURL} alt="userImage" />
                        </div>
                        <h5>{user?.displayName.split(" ")[0]}</h5>
                      </div>
                    </>
                  ) : (
                    <>
                      <FaBars />
                      <div className="avatar">
                        <div className="w-8 rounded-lg">
                          <img src={avatar} alt="userImage" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {/* avatar dropdown */}
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
                {/* profile photo */}
                <div
                  className="flex gap-2 items-center rounded-full py-1 px-2 shadow cursor-pointer"
                  tabIndex={0}
                >
                  <FaBars className="md:hidden" />
                  {user ? (
                    <>
                      <div
                        className="avatar flex items-center gap-1"
                        title={user?.displayName}
                      >
                        <div className="w-8 rounded-full">
                          <img
                            src={user?.photoURL}
                            referrerPolicy="no-referrer"
                            alt="userImage"
                          />
                        </div>
                        <h5 className="hidden md:block">
                          {user?.displayName.split(" ")[0]}
                        </h5>
                      </div>
                    </>
                  ) : (
                    <>
                      <FaBars className="hidden md:block"/>
                      <div className="avatar">
                        <div className="w-8 rounded-lg">
                          <img src={avatar} alt="userImage" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {/* avatar navItems */}
                <ul
                  tabIndex={0}
                  className="dropdown-content menu mt-2 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <NavItems />
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
