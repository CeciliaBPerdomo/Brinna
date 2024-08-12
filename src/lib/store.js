// store.js
import { configureStore } from '@reduxjs/toolkit';
import productosReducer from './productosSlice';

const store = configureStore({
  reducer: {
    productos: productosReducer,
  },
});

export default store;
