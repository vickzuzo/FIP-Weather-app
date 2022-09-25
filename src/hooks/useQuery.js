import axios from "axios";
import { useEffect, useState } from "react";

const useQuery = ({
  url,
  method,
  body = null,
  headers = null,
  autoRun = true,
}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = async (body) => {
    setloading(true);
    axios[method](url, body)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.response.data.message);
      })
      .finally(() => {
        setloading(false);
        setError("");
      });
  };
  useEffect(() => {
    if (!autoRun) {
      return;
    }
    fetchData();
  }, [method, body, headers]);
  console.log("hooks - d", data);
  return { data, error, loading, fetchData };
};

export default useQuery;

// patch
// get
// post
// put
