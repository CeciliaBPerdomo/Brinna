import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../app/firebase/config';

// Thunk para agregar un usuario con ID secuencial y verificación de email
export const agregarUsuario = createAsyncThunk(
  'usuarios/agregarUsuario',
  async (values, { getState, rejectWithValue }) => {
    try {
      // Verificar si el email ya existe en Firestore
      const q = query(collection(db, "usuarios"), where("email", "==", values.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        return rejectWithValue("El email ya está registrado");
      }

      // Verificar si el nombre de usuario ya existe en Firestore
      const usuarioQuery = query(collection(db, "usuarios"), where("usuario", "==", values.usuario));
      const usuarioSnapshot = await getDocs(usuarioQuery);

      if (!usuarioSnapshot.empty) {
        return rejectWithValue("El nombre de usuario ya está registrado");
      }

      // Obtener el siguiente ID secuencial 
      const querySnapshotCantidad = await getDocs(collection(db, "usuarios"));
      const existingUsers = querySnapshotCantidad.docs.map((doc) => doc.data());
      const nextId = existingUsers.length + 1;

      const userWithId = { ...values, id: nextId }; // Agregar el ID al objeto del usuario
      const docRef = doc(db, "usuarios", String(nextId)); // Usa el ID como la clave del documento
      await setDoc(docRef, userWithId);

      return userWithId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Crear el slice de usuarios
const usuariosSlice = createSlice({
  name: 'usuarios',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(agregarUsuario.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(agregarUsuario.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload); // Agrega el nuevo usuario con el ID generado
      })
      .addCase(agregarUsuario.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default usuariosSlice.reducer;
