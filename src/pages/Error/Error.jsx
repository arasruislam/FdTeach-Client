import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorLottie from "../../../public/error.json";

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center justify-center h-screen p-8 text-gray-800">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* Large device */}
        <Lottie
          animationData={errorLottie}
          loop={true}
          autoSize
          resizeMode="center"
          style={{ width: 600 }}
          className="hidden md:block"
        />
        {/* Small device */}
        <Lottie
          animationData={errorLottie}
          loop={true}
          autoSize
          resizeMode="center"
          style={{ width: 300 }}
          className="md:hidden"
        />

        {/* Error massages */}
        <div className="space-y-4 -mt-12 md:-mt-24 lg:mt-0 z-10">
          <h2 className="text-2xl">
            <span>error: </span>
            {status || 404}
          </h2>
          <p className="text-3xl text-red-500 font-extrabold">
            {error?.message}
          </p>
          <Link to="/">
            <button className="btn btn-error text-white mt-4">
              Back To Homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
