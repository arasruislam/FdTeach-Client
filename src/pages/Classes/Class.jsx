import { FaUsers } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import { MdOutlineDiversity2 } from "react-icons/md";

const Class = ({ singleClass }) => {
  return (
    <div className="card card-compact max-w-96 rounded-none bg-base-100 shadow-md relative hover:bg-emerald-50 hover:scale-105 transition-all duration-300">
      <figure>
        <LazyLoad>
          <img src={singleClass?.image} alt="Shoes" />
        </LazyLoad>
      </figure>
      <div className="card-body ">
        <div className="flex items-center gap-2">
          {/* Instructor photo */}
          <div className="avatar">
            <div className="w-12 mask mask-hexagon">
              <LazyLoad>
                <img src={singleClass?.instructor_photo} />
              </LazyLoad>
            </div>
          </div>
          {/* Instructor name */}
          <div>
            <h3 className="text-lg">{singleClass?.instructor_name}</h3>
            <p className="-mt-2">
              <small>Instructor</small>
            </p>
          </div>
        </div>
        {/* Class name */}
        <h2 className="card-title mt-4">{singleClass?.name}</h2>
        {/* Total students */}
        <p className="flex items-center">
          <FaUsers className="h-6 w-6 mr-2 text-red-500" />{" "}
          <span className="font-semibold mr-2">Students:</span>
          {singleClass?.number_of_students}
        </p>
        {/* available site */}
        <p className="flex items-center">
          <MdOutlineDiversity2 className="h-6 w-6 mr-2 text-red-500" />{" "}
          <span className="font-semibold mr-2">Available Sit:</span>
          {singleClass?.available_seats}
        </p>
        {/* Button */}
        <div className="card-actions justify-end">
          <button className="btn btn-normal text-black border-red-500 border-0 border-b-4 bg-red-200 hover:bg-red-500 hover:border-[#4FBF9F] transition-all duration-300 capitalize">
            Select
          </button>
        </div>
        <button className="absolute top-0 right-0 mt-2 mr-4 bg-white text-xl text-[#4FBF9F] font-bold p-2 rounded-xl border-b-2 shadow">
          ${singleClass?.price}
        </button>
      </div>
    </div>
  );
};

export default Class;
