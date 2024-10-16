import { useState, useEffect } from "react";
const useFetchData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await response.json();
        const response = await fetch(url);
        setLoading(false);
        setData(result);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, error, data };
};
export default useFetchData;
