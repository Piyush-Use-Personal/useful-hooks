import { useState } from 'react';
import axios from 'axios';

const useActionAxios = (url, config = {}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setData] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    const dispatch = async () => {
      try {
        setError('');
        setIsSuccess(false);
        setIsLoading(true);
        const response = await axios.get(url, config);
        setIsLoading(false);
        setData(response.data);
        setIsSuccess(true);
      } catch (err) {
        setIsLoading(false);
        setIsSuccess(false);
        setError(err);
      }
    };
    return {
      isLoading,
      result,
      isSuccess,
      error,
      dispatch,
    };
  };
  
export default useActionAxios;
