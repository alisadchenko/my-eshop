import { configureStore } from '@reduxjs/toolkit';
import { productReducer, selectedProductReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

const reducer = {
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartReducer,
}

const store = configureStore({
    reducer,
}, 
    {},
    window.__REDUX_DEVTOOLS_EXTENTSION__ && window.__REDUX_DEVTOOLS_EXTENTSION__()
);

export default store;