import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import "./App.css";
import ProductDetails from './containers/ProductDetails';
import CartPage from "./pages/cart";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<ProductListing />} />
        <Route path='/product/:productId' exact element={<ProductDetails />} />
        <Route path='/cart' exact element={<CartPage />} />
        {!authCtx.isLoggedIn && (<Route path='/login' exact element={<LoginPage />} />)}
        {authCtx.isLoggedIn && (<Route path='/login' exact element={<ProfilePage />} />)}
        <Route path='/profile' exact element={authCtx.isLoggedIn ? <ProfilePage /> : <LoginPage />} />
        <Route path='*' element={ () => <Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
