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
import Payment from "../pages/Dashboard/Student/Payment/Payment";

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
      // Student Routes
      {
        path: "selected-classes",
        element: <SelectedClasses />,
      },
      {
        path: "enrolled-classes",
        element: <EnrolledClasses />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/get-all-selected-classes/${params.id}`),
      },
    ],
  },
]);

export default router;
