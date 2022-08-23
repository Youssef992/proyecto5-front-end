import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import DetailProduct from './components/DetailProduct/DetailProduct';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile'
import { UserProvider } from './context/UserProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='products' element={<Products />} />
            <Route path=':productId' element={<DetailProduct />} />
            <Route path='login' element={<Login />} />
            <Route path='cart' element={<Cart />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);