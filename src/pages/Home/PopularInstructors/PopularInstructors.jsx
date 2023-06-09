import useInstructors from "../../../hooks/useInstructors";
import SingleInstructor from "./SingleInstructor";

const PopularInstructors = () => {
  const [instructors] = useInstructors();
  console.log(instructors);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      {instructors.map((instructor) => (
        <SingleInstructor key={instructor?._id} instructor={instructor} />
      ))}
    </div>
  );
};

export default PopularInstructors;
