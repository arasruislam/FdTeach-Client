import useClasses from "../../hooks/useClasses";
import Class from "./Class";
import classesBg from "../../assets/classesBG.svg"

const Classes = () => {
    const [classes] = useClasses();
    return (
      <div style={{ background: `url(${classesBg})` }} className="min-h-screen">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 pt-8">
          {classes.map((singleClass) => (
            <Class singleClass={singleClass} key={singleClass._id} />
          ))}
        </section>
      </div>
    );
};

export default Classes;