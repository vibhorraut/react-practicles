// store.js
// import { createStore } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from './reducers/cartReducer';

const store = createStore(cartReducer);

export default store;
