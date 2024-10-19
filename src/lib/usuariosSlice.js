//usuariosSlice.js
// Redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Google
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '../app/firebase/config';

// Firebase 
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../app/firebase/config';

// Encriptacion de contraseña 
import bcrypt from 'bcryptjs';
// import { user } from '@nextui-org/react';
// import next from 'next';

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

      // Encriptar la contraseña solo si no es vacía
      let hashedPassword = "";
      if (values.password) {
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(values.password, salt);
      }

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
      const q = query(collection(db, "usuarios"), where("email", "==", values.email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No se encontraron documentos.");
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

      // Recuperación del usuario
      const user = { 
        id: userData.id,
        usuario: userData.usuario, 
        email: userData.email, 
        nombre: userData.nombre || userData.name,
        //password: userData.password, //esta hasheada
        celular: userData.celular,
        cumpleanos: userData.cumpleanos, 
        genero: userData.genero, 
        deparamento: userData.deparamento, 
        ciudad: userData.ciudad,
        direccion: userData.direccion
      };

      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user)

      return { user, token, expirationTime };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Se loguea con Google y crea un usuario si no esta registrado
export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Verificar si el usuario ya existe en Firestore
     const docRef = query(collection(db, "usuarios"), where("uid", "==", user.uid));
     const querySnapshot = await getDocs(docRef);

     let nextId; 

     if (querySnapshot.empty) {
        // Obtener el siguiente ID secuencial 
        const querySnapshotCantidad = await getDocs(collection(db, "usuarios"));
        const existingUsers = querySnapshotCantidad.docs.map((doc) => doc.data());
        nextId = existingUsers.length + 1;

        // Guardar el usuario con la contraseña encriptada
        const userWithId = {
          id: nextId, // Agregar el ID al objeto del usuario
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          usuario: user.displayName || '', // Puedes usar el nombre de display como usuario
        };

        // Guardar el nuevo usuario en Firestore
        const docRef = doc(db, "usuarios", String(nextId)); // Usa el ID como la clave del documento
        await setDoc(docRef, userWithId);
      } else {
        const existingUser = querySnapshot.docs[0].data();
        nextId = existingUser.id; 
      }

      // Simulación de token
      const token = 'user-token'; // Simular un token
      const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1 hora en milisegundos

      // Guardar el token y marca de tiempo en localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('tokenExpiration', expirationTime);

      // Recuperación del usuario
      const userGoogle = {
        id: nextId,
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        usuario: user.displayName,
      };

      localStorage.setItem('currentUser', JSON.stringify(userGoogle));
      setCurrentUser(userGoogle)

      return { userGoogle, token, expirationTime };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const actualizarUsuario = createAsyncThunk(
  'usuarios/actualizarUsuario',
  async (values, { getState, rejectWithValue }) => {
    try {
      // Obtener el estado actual de usuarios para acceder al usuario actual
      const state = getState();
      const currentUser = state.usuarios.currentUser;

      if (!currentUser) {
        return rejectWithValue("No se encontró un usuario autenticado.");
      }

      // Crear un objeto con la nueva información a actualizar
      const usuarioActualizado = {
        ...currentUser,
        nombre: values.nombre,
        usuario: values.usuario,
        email: values.email,
        celular: values.celular,
        cumpleanos: values.cumpleanos,
        genero: values.genero,
        departamento: values.departamento,
        ciudad: values.ciudad,
        direccion: values.direccion,
      };

      // Referencia al documento del usuario en Firestore
      const docRef = doc(db, "usuarios", String(currentUser.id));

      // Actualizar el documento en Firestore
      await setDoc(docRef, usuarioActualizado, { merge: true });

      // Retornar el usuario actualizado
      return usuarioActualizado;
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

      // Agregar usuario
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
      })

      // Login con Google
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        localStorage.setItem('currentUser', JSON.stringify(action.payload));
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Actualizar usuario
    .addCase(actualizarUsuario.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(actualizarUsuario.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
    })
    .addCase(actualizarUsuario.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

  },
});

export const { setCurrentUser, logout } = usuariosSlice.actions;
export default usuariosSlice.reducer;