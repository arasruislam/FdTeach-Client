import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Primary from "../Layouts/Primary";
import Instructors from "../pages/Instructor/Instructors";
import Hello from "../pages/Instructor/Hello";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Primary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Hello />,
      },
    ],
  },
]);

export default router;
