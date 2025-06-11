import { useEffect } from 'react';
import axios from 'axios';

const AxiosAsyncAwait = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
      console.log(res.data);
    };
    fetchData();
  }, []);

  return <h2>Async/Await with Axios</h2>;
};

export default AxiosAsyncAwait;
