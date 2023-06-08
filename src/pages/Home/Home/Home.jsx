import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";

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
    </div>
  );
};

export default Home;
