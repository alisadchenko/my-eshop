import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import "./App.css";
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<ProductListing />} />
        <Route path='/product/:productId' exact element={<ProductDetails />} />
        <Route>404 Not Found!</Route>
      </Routes>
    </Router>
  );
}

export default App;
