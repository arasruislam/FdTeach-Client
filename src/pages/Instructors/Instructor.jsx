import { FaUsers } from "react-icons/fa";
import LazyLoad from "react-lazyload";

const Instructor = ({ instructor }) => {
  return (
    <div className="card max-w-96 xl:card-side xl:max-h-[450px] bg-base-100 shadow relative overflow-hidden xl:border-l-4 xl:border-r-4 xl:border-red-500">
      <figure className="xl:w-1/2">
        <LazyLoad>
          <img
            src={instructor?.instructor_image}
            alt="instructor"
            className="xl:h-full xl:object-cover rounded-xl xl:rounded-none"
          />
        </LazyLoad>
      </figure>
      <div className="flex items-center justify-center px-4 py-8 xl:py-4 w-full absolute xl:static h-full bg-slate-700 bg-opacity-80">
        <div>
          {/* Instructor Name */}
          <h2 className="card-title text-3xl lg:text-2xl xl:text-4xl text-white">
            {instructor?.instructor_name}
          </h2>
          {/* Instructor email */}
          <h4 className="text-white mb-4 xl:mb-8">
            <small>{instructor?.instructor_email}</small>
          </h4>

          {/* Name of Classes */}
          <div className="text-gray-300  tracking-wide">
            <span className="font-bold text-[#4FBF9F] text-lg">
              Name of Classes:
            </span>{" "}
            {instructor?.classes_taken}
          </div>

          {/* Classes taken */}
          <div className="text-white text-lg mt-2">
            <span className="font-bold text-[#4FBF9F]">classes Taken:</span>{" "}
            {instructor?.number_of_classes}
          </div>
          {/* number students */}
          <div className="flex items-center mt-2 text-white">
            <FaUsers className="h-6 w-6 mr-2 text-[#4FBF9F]" />
            {instructor?.number_of_students}
          </div>
          {/* Button */}
          <div className="card-actions mt-8">
            <button className="btn btn-normal text-black border-[#4FBF9F] border-0 border-b-4 bg-teal-100 hover:bg-[#4FBF9F] hover:border-[#4FBF9F] transition-all duration-300 capitalize">
              see classes
            </button>
          </div>
        </div>
          </div>
          
    </div>
  );
};

export default Instructor;
