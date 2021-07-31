import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url, config = {}, refetch = 0) => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setData] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        setError("");
        const response = await axios.get(url, config);
        setIsLoading(false);
        setData(response.data);
        setIsSuccess(true);
      } catch (err) {
        setIsLoading(false);
        setIsSuccess(false);
        setError(err);
      }
    }
    fetchData();
  }, [refetch, url]);
  return {
    isLoading,
    result,
    isSuccess,
    error,
  };
};

export default useAxios;