import { useState, useEffect } from "react";
const useClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:5000/classes";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);
  return [classes, loading];
};

export default useClasses;
