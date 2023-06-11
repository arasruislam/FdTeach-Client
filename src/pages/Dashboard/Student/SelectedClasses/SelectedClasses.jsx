import { Helmet } from "react-helmet-async";
import useSelectedClasses from "../../../../hooks/useSelectedClasses";
import ClassList from "./ClassList";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  const [selectedClass, refetch] = useSelectedClasses();

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
        fetch(`http://localhost:5000/selected-classes/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Class Remove From The List.", "success");
              refetch();
            }
          });
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

      {selectedClass.length > 0 && (
        <section className="w-full px-4">
          <div className="overflow-x-auto">
            <table className="table">
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
      )}
    </>
  );
};

export default SelectedClasses;
