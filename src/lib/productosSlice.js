// productosSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { doc, setDoc } from 'firebase/firestore';
import { db, storage } from '../app/firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Thunk para realizar el fetch de productos
export const fetchProductos = createAsyncThunk(
  'productos/fetchProductos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productos/todos`, {
        cache: "no-store",
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// En el thunk `agregarProducto`, solo devuelve la URL del archivo
export const agregarProducto = createAsyncThunk(
  'productos/agregarProducto',
  async (values, { rejectWithValue, getState }) => {
    try {
      // Obtener el usuario actual desde el estado
      const state = getState();
      //console.log("Estado de usuarios:", state.usuarios); // Verifica el estado
      const currentUser = state.usuarios.currentUser;

      // Verifica el ID del usuario
      console.log("Usuario actual:", currentUser);
      if (!currentUser) {
        throw new Error("No hay un usuario autenticado.");
      }

      let fileURL = "";
      if (values.file) {
        const storageRef = ref(storage, `productos/${values.file.name}`);
        await uploadBytes(storageRef, values.file);
        fileURL = await getDownloadURL(storageRef);
      }

      let vendedor = 0
      if (currentUser.id) {
        vendedor = currentUser.id
      } else if (currentUser.userGoogle.id) {
        vendedor = currentUser.userGoogle.id
      }

      // Crear el objeto del producto con el ID del usuario
      const productData = {
        ...values,
        file: fileURL,
        id_vendedor: vendedor,
        estado: "vendo",
      };

      // Guardar el producto en Firestore
      const docRef = doc(db, "productos", values.id);
      await setDoc(docRef, productData);

      return productData; // Devuelve el producto con el ID del usuario

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const productosSlice = createSlice({
  name: 'productos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      //Mostrar productos / ropa
      .addCase(fetchProductos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //Agregar productos / ropa
      .addCase(agregarProducto.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(agregarProducto.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(agregarProducto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Selector para obtener un producto por ID
export const selectProductoById = (state, id) => {
  return state.productos.items.find(producto => producto.id === id);
};


export default productosSlice.reducer;
