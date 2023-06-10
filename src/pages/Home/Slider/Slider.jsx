import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Image import
import image1 from "../../../assets/Slider/fashion-1.jpg";
import image2 from "../../../assets/Slider/fashion-2.jpg";
import image3 from "../../../assets/Slider/fashion-3.jpg";
import border from "../../../assets/border.png";

const Slider = () => {
  return (
    <Carousel className="text-center">
      {/* Slider */}
      <div className="relative">
        <img src={image1} alt="slider image" />
        <div className="absolute left-0 top-0 right-0 h-full text-left bg-gray-800 bg-opacity-80 flex items-center">
          <div className="w-full px-2 md:px-4 lg:p-8 lg:w-5/6">
            <h1 className="hidden sm:inline bg-white p-1 text-black font-semibold shadow">
              connect with fashion
            </h1>
            <h1 className="capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide font-bold leading-[1.2] text-white mt-2">
              {" "}
              <span className="text-red-500">think</span> and{" "}
              <span className="text-[#4FBF9F]">Discover,</span> <br /> your
              unique style at our{" "}
              <span className="relative">
                <span className="text-red-500">Fd</span>
                <span className="text-[#4FBF9F]">Teach</span>
                <img
                  src={border}
                  alt="border image"
                  className="absolute left-0 -bottom-4"
                />
              </span>
            </h1>
            <p className="hidden sm:block mt-4 lg:mt-12 text-gray-300 text-justify">
              Welcome to our <strong>FdTeach!</strong> Get ready to embark on a
              journey through the latest fashion trends and designs that will
              leave you inspired and stylish.Unleash your creativity, make a
              statement, and let your fashion choices reflect your personality.{" "}
            </p>
            <button className="btn btn-md sm:btn-lg mt-8 text-black border-[#4FBF9F] border-0 border-b-4 hover:bg-[#4FBF9F] hover:border-white transition-all duration-300 capitalize">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Slider */}
      <div className="relate">
        <img src={image2} alt="slider image" />
        <div className="absolute left-0 top-0 right-0 h-full text-left bg-gray-800 bg-opacity-80 flex items-center">
          <div className="w-full px-2 md:px-4 lg:p-8 lg:w-5/6">
            <h1 className="hidden sm:inline bg-white p-1 text-black font-semibold shadow">
              connect with fashion
            </h1>
            <h1 className="capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide font-bold leading-[1.2] text-white mt-2">
              {" "}
              <span className="text-red-500">think</span> and{" "}
              <span className="text-[#4FBF9F]">Discover,</span> <br /> your
              unique style at our{" "}
              <span className="relative">
                <span className="text-red-500">Fd</span>
                <span className="text-[#4FBF9F]">Teach</span>
                <img
                  src={border}
                  alt="border image"
                  className="absolute left-0 -bottom-4"
                />
              </span>
            </h1>
            <p className="hidden sm:block mt-4 lg:mt-12 text-gray-300 text-justify">
              Welcome to our <strong>FdTeach!</strong> Get ready to embark on a
              journey through the latest fashion trends and designs that will
              leave you inspired and stylish.Unleash your creativity, make a
              statement, and let your fashion choices reflect your personality.{" "}
            </p>
            <button className="btn btn-md sm:btn-lg mt-8 text-black border-[#4FBF9F] border-0 border-b-4 hover:bg-[#4FBF9F] hover:border-white transition-all duration-300 capitalize">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Slider */}
      <div className="relative">
        <img src={image3} alt="slider image" />
        <div className="absolute left-0 top-0 right-0 h-full text-left bg-gray-800 bg-opacity-80 flex items-center">
          <div className="w-full px-2 md:px-4 lg:p-8 lg:w-5/6">
            <h1 className="hidden sm:inline bg-white p-1 text-black font-semibold shadow">
              connect with fashion
            </h1>
            <h1 className="capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide font-bold leading-[1.2] text-white mt-2">
              {" "}
              <span className="text-red-500">think</span> and{" "}
              <span className="text-[#4FBF9F]">Discover,</span> <br /> your
              unique style at our{" "}
              <span className="relative">
                <span className="text-red-500">Fd</span>
                <span className="text-[#4FBF9F]">Teach</span>
                <img
                  src={border}
                  alt="border image"
                  className="absolute left-0 -bottom-4"
                />
              </span>
            </h1>
            <p className="hidden sm:block mt-4 lg:mt-12 text-gray-300 text-justify">
              Welcome to our <strong>FdTeach!</strong> Get ready to embark on a
              journey through the latest fashion trends and designs that will
              leave you inspired and stylish.Unleash your creativity, make a
              statement, and let your fashion choices reflect your personality.{" "}
            </p>
            <button className="btn btn-md sm:btn-lg mt-8 text-black border-[#4FBF9F] border-0 border-b-4 hover:bg-[#4FBF9F] hover:border-white transition-all duration-300 capitalize">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
