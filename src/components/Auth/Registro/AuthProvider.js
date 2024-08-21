// AuthProvider.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '@/lib/usuariosSlice';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
  
    if (authToken && tokenExpiration) {
      const currentTime = new Date().getTime();
  
      if (currentTime < tokenExpiration) {
        const userString = localStorage.getItem('currentUser');
      
      // Verificar si hay un valor válido antes de intentar parsear
      if (userString) {
        try {
          const user = JSON.parse(userString); // Convertir de JSON a objeto
          dispatch(setCurrentUser(user));
        } catch (error) {
          console.error("Error al parsear currentUser:", error);
        }
      }
      } else {
        localStorage.removeItem('authToken');
        localStorage.removeItem('tokenExpiration');
        localStorage.removeItem('currentUser'); // Eliminar también el usuario si el token ha expirado
      }
    }
  }, [dispatch]);

  return <>{children}</>;
}

export default AuthProvider;
