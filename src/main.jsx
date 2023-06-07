import AuthProvider from "./Providers/AuthProvider.jsx";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <div className="font-Poppins layout-size">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </HelmetProvider>
  </AuthProvider>
);
