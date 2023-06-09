import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Primary from "../Layouts/Primary";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Error from "../pages/Error/Error";
import Instructors from "../pages/Instructors/Instructors";

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
    ],
  },
]);

export default router;
