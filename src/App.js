import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import "./App.css";
import ProductDetails from './containers/ProductDetails';
import CartPage from "./pages/cart";
import LoginPage from "./pages/login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<ProductListing />} />
        <Route path='/product/:productId' exact element={<ProductDetails />} />
        <Route path='/cart' exact element={<CartPage />} />
        <Route path='/login' exact element={<LoginPage />} />
        <Route>404 Not Found!</Route>
      </Routes>
    </Router>
  );
}

export default App;
