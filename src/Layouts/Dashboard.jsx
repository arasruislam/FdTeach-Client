import { NavLink, Outlet } from "react-router-dom";
import Container from "../components/Container";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { BiSelectMultiple } from "react-icons/bi";
import { MdClass } from "react-icons/md";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="min-h-[calc(100vh-220px)] pt-20 mb-8">
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <Outlet />
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              ></label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                {/* Sidebar Item here */}

                {/* Student dashboard items */}
                <li>
                  <NavLink
                    to="/selectedClasses"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <BiSelectMultiple />
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/enrolledClasses"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    <MdClass />
                    My Enrolled Classes
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
