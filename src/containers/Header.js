import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";


const Header = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };
  
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
          {!isLoggedIn && (
            <div className="item">
              <Link to='/login'>Login/Signup</Link>
            </div>
          )}
          {isLoggedIn && (
            <><div className="item">
              <Link to='/profile'>Profile</Link>
            </div>
            <div className="item">
              <button className="ui basic button" onClick={logoutHandler}>Logout</button>
            </div></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;