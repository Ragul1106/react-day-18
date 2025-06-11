import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCrud = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [editId, setEditId] = useState(null);

  const fetchProducts = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = () => {
    axios.post('https://fakestoreapi.com/products', { title: name })
      .then(() => {
        setName('');
        fetchProducts();
      });
  };

  const handleUpdate = () => {
    axios.put(`https://fakestoreapi.com/products/${editId}`, { title: name })
      .then(() => {
        setEditId(null);
        setName('');
        fetchProducts();
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://fakestoreapi.com/products/${id}`)
      .then(fetchProducts);
  };

  return (
    <div>
      <h2>Product CRUD</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Product name" className="form-control my-2" />
      <button className="btn btn-success me-2" onClick={editId ? handleUpdate : handleAdd}>
        {editId ? 'Update' : 'Add'}
      </button>
      <ul className="list-group mt-3">
        {products.map(p => (
          <li key={p.id} className="list-group-item d-flex justify-content-between">
            {p.title || 'No Title'}
            <span>
              <button className="btn btn-sm btn-primary me-2" onClick={() => { setName(p.title); setEditId(p.id); }}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p.id)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCrud;