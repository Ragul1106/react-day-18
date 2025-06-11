import axios from 'axios';
import { useEffect } from 'react';

const AxiosInterceptor = () => {
    useEffect(() => {
        const req = axios.interceptors.request.use(req => {
            console.log('Request:', req);
            return req;
        });

        const res = axios.interceptors.response.use(res => {
            console.log('Response:', res);
            return res;
        });

        axios.get('https://jsonplaceholder.typicode.com/posts/1');

        return () => {
            axios.interceptors.request.eject(req);
            axios.interceptors.response.eject(res);
        };
    }, []);

    return <h2>Axios Interceptors</h2>;
};

export default AxiosInterceptor;
