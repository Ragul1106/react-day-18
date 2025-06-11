import axios from 'axios';

const AxiosDeleteUser = () => {
  const deleteUser = async () => {
    await axios.delete('https://jsonplaceholder.typicode.com/users/1');
    alert('User deleted!');
  };

  return (
    <div>
      <h2>DELETE User</h2>
      <button onClick={deleteUser}>Delete User</button>
    </div>
  );
};

export default AxiosDeleteUser;
