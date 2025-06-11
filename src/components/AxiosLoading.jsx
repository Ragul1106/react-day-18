import { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Loading State</h2>
      {loading ? <p>Loading...</p> : <p>Data loaded!</p>}
    </div>
  );
};

export default AxiosLoading;
