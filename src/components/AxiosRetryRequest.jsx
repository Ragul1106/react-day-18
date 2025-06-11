import axios from 'axios';
import { useEffect } from 'react';

const AxiosRetryRequest = () => {
  useEffect(() => {
    const retryAxios = axios.create();
    retryAxios.interceptors.response.use(null, async error => {
      if (error.config && !error.config.__isRetry) {
        error.config.__isRetry = true;
        return retryAxios(error.config);
      }
      return Promise.reject(error);
    });

    retryAxios.get('https://jsonplaceholder.typicode.com/fake-endpoint')
      .catch(err => console.log('Final error:', err.message));
  }, []);

  return <h2>Retry Failed Requests</h2>;
};

export default AxiosRetryRequest;
