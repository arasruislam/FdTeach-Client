import {
  Link,
  useLocation,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import Lottie from "lottie-react";
import errorLottie from "../../../public/error.json";
import { Helmet } from "react-helmet-async";
import { FaAngleDoubleLeft, FaHome } from "react-icons/fa";

const Error = () => {
  const { error, status } = useRouteError();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  return (
    <>
      <Helmet>
        <title>StartUp Template | Error</title>
      </Helmet>

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

            <div className="flex flex-col md:flex-row md:gap-4">
              {/* Go to home page route */}
              <Link to="/">
                <button className="btn btn-error w-full text-white mt-4 capitalize">
                  <FaHome className="h-6 w-6" /> Back To Homepage
                </button>
              </Link>
              {/* Back in previous page. */}
              <button
                onClick={() => navigate(-1)}
                className="btn btn-info text-white mt-4 capitalize"
              >
                <FaAngleDoubleLeft className="h-6 w-6" /> Previous Page
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
