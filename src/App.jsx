import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AxiosIntro from './components/AxiosIntro';
import AxiosInstallNote from './components/AxiosInstallNote';
import AxiosGetUser from './components/AxiosGetUser';
import AxiosErrorHandling from './components/AxiosErrorHandling';
import AxiosLoading from './components/AxiosLoading';
import AxiosPostUser from './components/AxiosPostUser';
import AxiosPutUser from './components/AxiosPutUser';
import AxiosDeleteUser from './components/AxiosDeleteUser';
import AxiosGlobalConfig from './components/AxiosGlobalConfig';
import AxiosInterceptor from './components/AxiosInterceptor';
import AxiosCancelRequest from './components/AxiosCancelRequest';
import AxiosRetryRequest from './components/AxiosRetryRequest';
import AxiosAsyncAwait from './components/AxiosAsyncAwait';
import UserList from './components/UserList';
import ProductCrud from './components/ProductCrud';
import WeatherApp from './components/WeatherApp';
import ImageGallery from './components/ImageGallery';

const App = () => (
  <Router>
    <div className="container my-4">
      <h1 className="text-center mb-4">Axios Demos</h1>
      <nav className="mb-4 d-flex flex-wrap gap-2">
        <Link to="/" className="btn btn-outline-primary">Intro</Link>
        <Link to="/install" className="btn btn-outline-primary">Install</Link>
        <Link to="/get" className="btn btn-outline-primary">GET</Link>
        <Link to="/error" className="btn btn-outline-primary">Error</Link>
        <Link to="/loading" className="btn btn-outline-primary">Loading</Link>
        <Link to="/post" className="btn btn-outline-primary">POST</Link>
        <Link to="/put" className="btn btn-outline-primary">PUT</Link>
        <Link to="/delete" className="btn btn-outline-primary">DELETE</Link>
        <Link to="/global" className="btn btn-outline-primary">Global Config</Link>
        <Link to="/interceptor" className="btn btn-outline-primary">Interceptors</Link>
        <Link to="/cancel" className="btn btn-outline-primary">Cancel</Link>
        <Link to="/retry" className="btn btn-outline-primary">Retry</Link>
        <Link to="/async" className="btn btn-outline-primary">Async/Await</Link>
        <Link to="/users" className="btn btn-outline-success">User List</Link>
        <Link to="/products" className="btn btn-outline-success">Product CRUD</Link>
        <Link to="/weather" className="btn btn-outline-success">Weather App</Link>
        <Link to="/gallery" className="btn btn-outline-success">Image Gallery</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AxiosIntro />} />
        <Route path="/install" element={<AxiosInstallNote />} />
        <Route path="/get" element={<AxiosGetUser />} />
        <Route path="/error" element={<AxiosErrorHandling />} />
        <Route path="/loading" element={<AxiosLoading />} />
        <Route path="/post" element={<AxiosPostUser />} />
        <Route path="/put" element={<AxiosPutUser />} />
        <Route path="/delete" element={<AxiosDeleteUser />} />
        <Route path="/global" element={<AxiosGlobalConfig />} />
        <Route path="/interceptor" element={<AxiosInterceptor />} />
        <Route path="/cancel" element={<AxiosCancelRequest />} />
        <Route path="/retry" element={<AxiosRetryRequest />} />
        <Route path="/async" element={<AxiosAsyncAwait />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/products" element={<ProductCrud />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/gallery" element={<ImageGallery />} />
      </Routes>
    </div>
  </Router>
);

export default App;