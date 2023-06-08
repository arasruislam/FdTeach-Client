import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorLottie from "../../../public/error.json";

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center justify-center h-screen p-8 text-gray-800">
      <div className="flex items-center justify-center">
        <Lottie
          animationData={errorLottie}
          loop={true}
          autoSize
          resizeMode="center"
          style={{ width: 600 }}
        />
        <div className="space-y-4">
          <h2 className="text-2xl"><span>error: </span>{status || 404}</h2>
          <p className="text-3xl text-red-500 font-extrabold">{error?.message}</p>
          <Link to="/">
            <button className="btn btn-error text-white mt-4">Back To Homepage</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
