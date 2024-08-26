// store.js
import { configureStore } from '@reduxjs/toolkit';

import productosReducer from './productosSlice';
import usuariosReducer from './usuariosSlice'

const store = configureStore({
  reducer: {
    productos: productosReducer,
    usuarios: usuariosReducer, 
  },
});

export default store;
