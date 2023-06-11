import AuthProvider from "./Providers/AuthProvider.jsx";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="font-Poppins">
          <RouterProvider router={router} />
          <Toaster />
        </div>
      </QueryClientProvider>
    </HelmetProvider>
  </AuthProvider>
);
