import instance from '../axiosInstance';
import { useEffect } from 'react';

const AxiosGlobalConfig = () => {
  useEffect(() => {
    instance.get('/posts/1').then(res => console.log(res.data));
  }, []);

  return <h2>Global Axios Config Applied</h2>;
};

export default AxiosGlobalConfig;
