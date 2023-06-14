import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: selectedClass = [], refetch } = useQuery({
    queryKey: ["get-all-selected-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/get-all-selected-classes?email=${user?.email}`
      );
      return res.data;
    },
  });

  return { selectedClass, refetch };
};

export default useSelectedClasses;
