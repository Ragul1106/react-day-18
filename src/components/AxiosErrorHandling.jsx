import { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosErrorHandling = () => {
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://wrong-url.typicode.com/users')
      .catch(err => setError('Error fetching users!', err.error));
  }, []);

  return (
    <div>
      <h2>Error Handling</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AxiosErrorHandling;
