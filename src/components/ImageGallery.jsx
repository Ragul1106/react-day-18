import { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://picsum.photos/v2/list?page=1&limit=12')
      .then(res => setImages(res.data))
      .catch(() => setError('Error fetching images'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Image Gallery</h2>
      {loading && <p className="text-center">Loading images...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      <div className="row">
        {images.map(img => (
          <div className="col-md-3 col-sm-6 mb-4" key={img.id}>
            <div className="card shadow-sm h-100">
              <img
                src={`https://picsum.photos/id/${img.id}/300/200`}
                alt={img.author}
                className="card-img-top img-fluid"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <p className="card-text">{img.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
