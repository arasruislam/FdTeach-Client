import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();

  useEffect(() => {
    //   Request to server
    axiosSecure.interceptors.request.use((config) => {
      const token = `Bearer ${localStorage.getItem("access-token")}`;

      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    });

    // Response from server
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          (error.response && error.response.status === 401) ||
          error.response.status === 403
        ) {
          await signOutUser;
        }
      }
    );
  }, [signOutUser]);
  return [axiosSecure];
};

export default useAxiosSecure;
