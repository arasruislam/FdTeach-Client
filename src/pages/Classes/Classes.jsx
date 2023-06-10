import useClasses from "../../hooks/useClasses";
import Class from "./Class";
import classesBg from "../../assets/classesBG.svg"
import { Helmet } from "react-helmet-async";

const Classes = () => {
    const [classes] = useClasses();
  return (
    <>
      {/* Head Title */}
      <Helmet>
        <title>StartUp Template | classes</title>
      </Helmet>

      <div style={{ background: `url(${classesBg})` }} className="min-h-screen">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 pt-8">
          {classes.map((singleClass) => (
            <Class singleClass={singleClass} key={singleClass._id} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Classes;