import axios from 'axios';
import { useEffect } from 'react';

const AxiosCancelRequest = () => {
  useEffect(() => {
    const controller = new AbortController();

    axios.get('https://jsonplaceholder.typicode.com/posts', {
      signal: controller.signal
    }).catch(err => {
      if (axios.isCancel(err)) {
        console.log('Request canceled:', err.message);
      }
    });

    return () => controller.abort();
  }, []);

  return <h2>Cancel API Request</h2>;
};

export default AxiosCancelRequest;
