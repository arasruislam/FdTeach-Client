import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SingleClass from "./SingleClass";

const PopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  // Instructor data load using tanStack query
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes");
      return res.data;
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      {classes.map((singleClass) => (
        <SingleClass singleClass={singleClass} key={singleClass._id} />
      ))}
    </div>
  );
};

export default PopularClasses;
