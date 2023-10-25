import { Routes ,Route } from 'react-router-dom';
import './App.css';

import About from './pages/About';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/Register';
import ProductPage from './pages/ProductPage';
import Shop from './pages/Shop';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/products-filter' element={<Shop/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default App;
