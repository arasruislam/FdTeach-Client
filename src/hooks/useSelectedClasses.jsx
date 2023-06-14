import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useSelectedClasses = () => {
  const { user } = useAuth();

  const {
    data: selectedClass,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["get-all-selected-classes", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/get-all-selected-classes?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      return res.json();
    },
  });

  return [selectedClass, refetch, isLoading];
};

export default useSelectedClasses;
