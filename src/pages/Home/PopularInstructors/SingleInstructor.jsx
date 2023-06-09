
import { FaUsers } from "react-icons/fa";
import LazyLoad from "react-lazyload";

const SingleInstructor = ({ instructor }) => {
  return (
    <div className="card w-96 bg-base-100 shadow relative overflow-hidden">
      <figure>
        <LazyLoad>
          <img
            src={instructor?.instructor_image}
            alt="instructor"
            className="rounded-xl"
          />
        </LazyLoad>
      </figure>
      <div className="flex items-center justify-center px-4 py-8 w-full absolute h-full bg-slate-700 bg-opacity-80">
        <div>
          <h2 className="card-title text-3xl text-white mb-8">
            {instructor?.instructor_name}
          </h2>
          <div className="text-gray-200 tracking-wide">
            <span className="font-bold text-[#4FBF9F] text-lg">
              Name of Classes:
            </span>{" "}
            {instructor?.classes_taken}
          </div>
          <div className="text-white text-lg mt-2">
            <span className="font-bold text-[#4FBF9F]">classes Taken:</span>{" "}
            {instructor?.number_of_classes}
          </div>
          <div className="flex items-center mt-2 text-white">
            <FaUsers className="h-6 w-6 mr-2 text-[#4FBF9F]" />
            {instructor?.number_of_students}
          </div>
          <div className="card-actions mt-8">
            <button className="btn btn-normal text-black border-[#4FBF9F] border-0 border-b-4 bg-teal-100 hover:bg-[#4FBF9F] hover:border-[#4FBF9F] transition-all duration-300 capitalize">
              see more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInstructor;
