import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>
          <Link to='/'>eShop</Link>
        </h2>
        <div className="right menu">
          <div className="item">
            <Link to='/cart'>Cart</Link>
          </div>
          <div className="item">
            <Link to='/login'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;