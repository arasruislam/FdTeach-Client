import LazyLoad from "react-lazyload";
import { FaUsers } from "react-icons/fa";

const SingleClass = ({ singleClass }) => {
  return (
    <div className="card card-compact max-w-96 rounded-none bg-base-100 shadow-md relative hover:bg-emerald-50 hover:scale-105 transition-all duration-300">
      <figure>
        <LazyLoad>
          <img
            src={singleClass?.image}
            alt="Shoes"
            className="transition duration-500 hover:scale-110"
          />
        </LazyLoad>
      </figure>
      <div className="card-body ">
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="w-12 mask mask-hexagon">
              <img src={singleClass?.instructor_photo} />
            </div>
          </div>
          <div>
            <h3 className="text-lg">{singleClass?.instructor_name}</h3>
            <p className="-mt-2">
              <small>Instructor</small>
            </p>
          </div>
        </div>
        <h2 className="card-title mt-4">{singleClass?.name}</h2>
        <p className="flex items-center">
          <FaUsers className="h-6 w-6 mr-2 text-red-500" />{" "}
          <span className="font-semibold mr-2">Students:</span>
          {singleClass?.number_of_students}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-normal text-black border-[#4FBF9F] border-0 border-b-4 bg-teal-100 hover:bg-[#4FBF9F] hover:border-[#4FBF9F] transition-all duration-300 capitalize">
            see more
          </button>
        </div>
        <button className="absolute top-0 right-0 mt-2 mr-4 bg-white text-xl text-[#4FBF9F] font-bold p-2 rounded-xl border-b-2 shadow">
          ${singleClass?.price}
        </button>
      </div>
    </div>
  );
};

export default SingleClass;
