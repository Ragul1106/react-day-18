import axios from 'axios';

const AxiosPutUser = () => {
  const updateUser = async () => {
    await axios.put('https://jsonplaceholder.typicode.com/users/1', { name: 'Updated User' });
    alert('User updated!');
  };

  return (
    <div>
      <h2>PUT User</h2>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default AxiosPutUser;
