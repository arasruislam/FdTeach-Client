import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Primary from "../Layouts/Primary";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Error from "../pages/Error/Error";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import SelectedClasses from "../pages/Dashboard/Student/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Primary />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "selectedClasses",
        element: <SelectedClasses />,
      },
      {
        path: "enrolledClasses",
        element: <EnrolledClasses />,
      },
    ],
  },
]);

export default router;
