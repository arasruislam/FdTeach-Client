import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import EnrollList from "./EnrollList";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Lottie from 'lottie-react';
import noClassFound from "../../../../../public/no-class-found.json";


const EnrolledClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: enrollClasses = [] } = useQuery({
    queryKey: ["/all-enrolled-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/all-enrolled-classes?email=${user?.email}`
      );
      return res.data;
    },
  });

  return (
    <>
      {/* Head Title */}
      <Helmet>
        <title>Dashboard -- My Enrolled Classes</title>
      </Helmet>

      {enrollClasses && enrollClasses.length > 0 ? (
        <>
          <section className="max-w-[300px] mx-auto sm:max-w-md md:max-w-full lg:max-w-screen-lg lg:mx-4">
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr className="text-center">
                    <th>#</th>
                    <th>Class Photo</th>
                    <th>Class Name</th>
                    <th>Price</th>
                    <th>Enrollment Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* class details */}
                  {enrollClasses &&
                    enrollClasses.map((enroll, index) => (
                      <EnrollList
                        key={enroll?._id}
                        enroll={enroll}
                        index={index}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center">
            <Lottie animationData={noClassFound} loop={true} />
            <h3 className="text-2xl font-bold mb-8">No Enroll Classes Found</h3>
            <p className="flex gap-2">
              <span>Enrolled Now</span>
              <Link
                to="/dashboard/selected-classes"
                className="underline text-red-600 font-bold flex items-center gap-1"
              >
               Click Here <FaArrowAltCircleRight />
              </Link>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default EnrolledClasses;
