import { FaUsers } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import { MdOutlineDiversity2 } from "react-icons/md";
import useAuth from "./../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Class = ({ singleClass }) => {
  const { _id, image, name, price } = singleClass;
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelectedClasses = () => {
    if (user && user.email) {
      const selectedClassesInfo = {
        selectedClassId: _id,
        image,
        name,
        price,
        student_email: user?.email,
        student_name: user?.displayName,
        role: "student",
      };
      // post selected classes
      fetch("http://localhost:5000/selected-classes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClassesInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Class Selected Successfully 🎁🎁🎁");
          }
        });
    } else {
      Swal.fire({
        title: "Login To Select The Class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
      {singleClass.available_seats === 0 ? (
        <>
          {/* Available site = 0 */}
          <div className="card card-compact max-w-96 bg-red-500 rounded-none shadow-md relative hover:scale-105 transition-all duration-300">
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
                      <img
                        src={singleClass?.instructor_photo}
                        alt="instructor photo"
                      />
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
                <FaUsers className="h-6 w-6 mr-2 text-white" />{" "}
                <span className="font-semibold mr-2">Students:</span>
                {singleClass?.number_of_students}
              </p>
              {/* available site */}
              <p className="flex items-center">
                <MdOutlineDiversity2 className="h-6 w-6 mr-2 text-white" />{" "}
                <span className="font-semibold mr-2">Available Sit:</span>
                {singleClass?.available_seats}
              </p>
              {/* Button */}
              <div className="card-actions justify-end">
                <button
                  disabled
                  className="btn btn-normal text-black border-[#4FBF9F] border-0 border-b-4 bg-white hover:bg-red-500 hover:border-[#4FBF9F] transition-all duration-300 capitalize"
                >
                  Select
                </button>
              </div>
              <button className="absolute top-0 right-0 mt-2 mr-4 bg-white text-xl text-[#4FBF9F] font-bold p-2 rounded-xl border-b-2 shadow">
                ${singleClass?.price}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Available Site > 0 */}
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
                      <img
                        src={singleClass?.instructor_photo}
                        alt="instructor photo"
                      />
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
                <button
                  onClick={handleSelectedClasses}
                  className="btn btn-normal text-black border-red-500 border-0 border-b-4 bg-red-200 hover:bg-red-500 hover:border-[#4FBF9F] transition-all duration-300 capitalize"
                >
                  Select
                </button>
              </div>
              <button className="absolute top-0 right-0 mt-2 mr-4 bg-white text-xl text-[#4FBF9F] font-bold p-2 rounded-xl border-b-2 shadow">
                ${singleClass?.price}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Class;
