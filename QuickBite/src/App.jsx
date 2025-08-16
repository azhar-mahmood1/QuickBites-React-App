import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/LoginPopup/Login';

import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Verify from './pages/Verify/verify';
import MyOrders from './pages/MyOrders/MyOrders';

import './index.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  // These pages should NOT show the header or full-page background
  const isSimplePage = ['/cart', '/order', '/myorders', '/verify'].includes(location.pathname);

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <ToastContainer />

      <div className="app">
        <div
          className="background-container"
          style={{ height: isSimplePage ? 'auto' : '100vh' }}
        >
          <Navbar setShowLogin={setShowLogin} />
          {!isSimplePage && <Header />}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;