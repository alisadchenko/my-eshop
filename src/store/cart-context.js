import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../redux/reducers/cartReducer";
import ProductListing from "../containers/ProductListing";

const Cart = createContext();

const Context = ({ children }) => {
  const products = ProductListing.products;

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <Cart.Provider value={{ state, dispatch, }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;