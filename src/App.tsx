import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import AboutUs from './pages/AboutUs';
import DetailPage from './pages/DetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className='min-h-[50vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products/:id" element={<DetailPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
