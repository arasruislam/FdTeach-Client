import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import SectionTitle from "../../../components/SectionTitle";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div>
      {/* Head Title */}
      <Helmet>
        <title>StartUp Template | Home</title>
      </Helmet>

      {/* Slider */}
      <section className="mt-4">
        <Slider />
      </section>

      {/* Popular Classes */}
      <section className="mt-12">
        <SectionTitle title="Popular Classes" />
        <div className="pt-4">
          <PopularClasses />
        </div>
      </section>
    </div>
  );
};

export default Home;
