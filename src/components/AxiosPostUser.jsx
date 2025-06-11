import { useState } from 'react';
import axios from 'axios';

const AxiosPostUser = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://jsonplaceholder.typicode.com/users', { name });
    alert('User added!');
  };

  return (
    <div>
      <h2>POST User</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AxiosPostUser;
