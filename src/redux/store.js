import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/index';

const store = configureStore(
    {reducer: reducers}, 
    {},
    window.__REDUX_DEVTOOLS_EXTENTSION__ && window.__REDUX_DEVTOOLS_EXTENTSION__()
);

export default store;