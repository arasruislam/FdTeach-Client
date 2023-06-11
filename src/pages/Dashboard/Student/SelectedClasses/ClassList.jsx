import LazyLoad from "react-lazyload";

const ClassList = ({ classList, index, handleDeleteClass }) => {
  return (
    <tr key={classList?._id} className="text-center">
      <td>{index + 1}</td>
      {/* Class image */}
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-16" style={{ aspectRatio: 0 }}>
              <LazyLoad>
                <img
                  src={classList.image}
                  alt="Avatar Tailwind CSS Component"
                />
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
          className="btn btn-error btn-xs capitalize"
        >
          Delete
        </button>
        <button className="btn btn-warning btn-xs capitalize">Pay</button>
      </td>
    </tr>
  );
};

export default ClassList;
