//usuariosSlice.js

// Redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Firebase 
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../app/firebase/config';

// Encriptacion de contraseña 
import bcrypt from 'bcryptjs';

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

      // Encriptar la contraseña usando bcryptjs
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(values.password, salt);

      // Obtener el siguiente ID secuencial 
      const querySnapshotCantidad = await getDocs(collection(db, "usuarios"));
      const existingUsers = querySnapshotCantidad.docs.map((doc) => doc.data());
      const nextId = existingUsers.length + 1;

        // Guardar el usuario con la contraseña encriptada
        const userWithId = { 
          ...values, 
          id: nextId, // Agregar el ID al objeto del usuario
          password: hashedPassword // Guardar la contraseña encriptada
        };

      const docRef = doc(db, "usuarios", String(nextId)); // Usa el ID como la clave del documento
      await setDoc(docRef, userWithId);

      return userWithId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Acción asíncrona para iniciar sesión (simulada en este caso)
export const loginUsuario = createAsyncThunk(
  'usuarios/loginUsuario',
  async (values, { rejectWithValue }) => {
    try {
      // Verificar si el usuario existe en Firestore
      const q = query(collection(db, "usuarios"), where("email", "==", values.email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        return rejectWithValue("Usuario o contraseña incorrectos");
      }

      // Obtener el usuario desde Firestore
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      // Verificar la contraseña ingresada con la contraseña encriptada
      const isPasswordCorrect = await bcrypt.compare(values.password, userData.password);

      if (!isPasswordCorrect) {
        return rejectWithValue("Usuario o contraseña incorrectos");
      }

      // Simulación de token
      const token = 'user-token'; // Simular un token
      const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1 hora en milisegundos
      
      // Guardar el token y marca de tiempo en localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('tokenExpiration', expirationTime);
      
      // Simular la recuperación del usuario
      const user = { usuario: userData.usuario, email: userData.email };
      localStorage.setItem('currentUser', JSON.stringify(user));

      return { user, token, expirationTime };
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
    currentUser: null, // Para guardar el usuario autenticado
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem('authToken');
      localStorage.removeItem('tokenExpiration');
      localStorage.removeItem('currentUser')
    },
  },
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

export const { setCurrentUser, logout } = usuariosSlice.actions;
export default usuariosSlice.reducer;
