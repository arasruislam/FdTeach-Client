import useInstructors from "../../hooks/useInstructors";
import Instructor from "./Instructor";

const Instructors = () => {
    const [instructors] = useInstructors();
    return (
      <div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-8 mx-auto min-h-screen mt-4">
          {instructors.map((instructor) => (
            <Instructor key={instructor?._id} instructor={instructor} />
          ))}
        </section>
      </div>
    );
};

export default Instructors;