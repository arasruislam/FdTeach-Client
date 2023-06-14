import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SingleInstructor from "./SingleInstructor";

const PopularInstructors = () => {
  const [axiosSecure] = useAxiosSecure();

  // Instructor data load using tanStack query
  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/instructors");
      return res.data;
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      {instructors.map((instructor) => (
        <SingleInstructor key={instructor?._id} instructor={instructor} />
      ))}
    </div>
  );
};

export default PopularInstructors;
