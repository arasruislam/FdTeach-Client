import LazyLoad from "react-lazyload";

const EnrollList = ({ enroll, index }) => {
  return (
    <tr className="hover">
      <td>{index + 1}</td>
      {/* Class image */}
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-16" style={{ aspectRatio: 0 }}>
              <LazyLoad>
                <img src={enroll.image} alt="class image" />
              </LazyLoad>
            </div>
          </div>
        </div>
      </td>
      {/* Class Name */}
      <td>{enroll?.name}</td>
      {/* Price */}
      <td>${enroll?.price}</td>
      {/* Actions Button */}
      <td className="flex gap-2">
        <td>{enroll?.date}</td>
      </td>
    </tr>
  );
};

export default EnrollList;
