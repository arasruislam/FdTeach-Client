import { FaDollarSign, FaTrash } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const ClassList = ({ classList, index, handleDeleteClass }) => {
  console.log(classList);
  return (
    <tr key={classList?._id} className="hover">
      <td>{index + 1}</td>
      {/* Class image */}
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-16" style={{ aspectRatio: 0 }}>
              <LazyLoad>
                <img src={classList.image} alt="class image" />
              </LazyLoad>
            </div>
          </div>
        </div>
      </td>
      {/* Class Name */}
      <td>{classList?.name}</td>
      {/* Student Name */}
      <td>{classList?.student_name}</td>
      {/* Price */}
      <td>${classList?.price}</td>
      {/* Actions Button */}
      <td className="flex gap-2">
        <button
          onClick={() => handleDeleteClass(classList._id)}
          className="btn btn-error btn-xs capitalize transition duration-300 hover:scale-105"
        >
          <FaTrash />
          Delete
        </button>
        <button className="btn btn-warning btn-xs capitalize transition duration-300 hover:scale-105">
          <FaDollarSign />
          <Link to={`/dashboard/payment/${classList._id}`}>Pay</Link>
        </button>
      </td>
    </tr>
  );
};

export default ClassList;
