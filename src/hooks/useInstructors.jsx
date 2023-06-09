import { useEffect, useState } from "react";

const useInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:5000/instructors";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        setLoading(false);
      });
  }, []);

  return [instructors, loading];
};

export default useInstructors;
