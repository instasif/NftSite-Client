import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './router/routes/Route';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase/firebase.config';
import { useDispatch } from 'react-redux'
import { setUser } from './app/features/Auth/authSlice';


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user))
      }
    })
  }, [])
  console.log({
    apiKey: import.meta.env.VITE_API_KEY_apiKey,
    authDomain: import.meta.env.VITE_API_KEY_authDomain,
    projectId: import.meta.env.VITE_API_KEY_projectId,
    storageBucket: import.meta.env.VITE_API_KEY_storageBucket,
    messagingSenderId: import.meta.env.VITE_API_KEY_messagingSenderId,
    appId: import.meta.env.VITE_API_KEY_appId,
  })
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default App;