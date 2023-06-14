import { Helmet } from "react-helmet-async";
import ClassList from "./ClassList";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import noClassFound from "../../../../../public/no-class-found.json";
import { FaArrowAltCircleRight } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const SelectedClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: selectedClass = [], refetch } = useQuery({
    queryKey: ["get-all-selected-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/get-all-selected-classes?email=${user?.email}`
      );
      return res.data;
    },
  });

  const handleDeleteClass = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/selected-classes/${_id}`)
          .then((res) => {
            res.data;
            refetch();
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <>
      {/* Head Title */}
      <Helmet>
        <title>Dashboard -- My Selected Classes</title>
      </Helmet>

      {/* Condition for class list showing */}
      {selectedClass && selectedClass.length > 0 ? (
        <section className="max-w-[300px] mx-auto sm:max-w-md md:max-w-full lg:max-w-screen-lg lg:mx-4">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>Photo</th>
                  <th>Class Name</th>
                  <th>Student</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* class details */}
                {selectedClass &&
                  selectedClass.map((classList, index) => (
                    <ClassList
                      key={classList?._id}
                      classList={classList}
                      index={index}
                      handleDeleteClass={handleDeleteClass}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center">
            <Lottie animationData={noClassFound} loop={true} />
            <h3 className="text-2xl font-bold mb-8">No Class Found!</h3>
            <p className="flex gap-2">
              <span>Add classes</span>
              <Link
                to="/classes"
                className="underline text-red-600 font-bold flex items-center gap-1"
              >
                Here <FaArrowAltCircleRight />
              </Link>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default SelectedClasses;
