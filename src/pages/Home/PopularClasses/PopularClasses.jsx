import useClasses from "../../../hooks/useClasses";
import SingleClass from "./SingleClass";

const PopularClasses = () => {
  const [classes] = useClasses();
  console.log(classes);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {classes.map((singleClass) => (
        <SingleClass singleClass={singleClass} key={singleClass._id} />
      ))}
    </div>
  );
};

export default PopularClasses;
