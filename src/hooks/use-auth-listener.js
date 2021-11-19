import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase';

export default function useAuthListener() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // we have a user ... therefore we can store the user in local storage
        localStorage.setItem('AuthUser', JSON.stringify(authUser));
        setuser(authUser);
      } else {
        // we dont have an auth user, therefore clear the localstorage
        localStorage.removeItem('AuthUser');
        setuser(null);
      }
    });

    return () => listener();
  }, [firebase]);

  return { user };
}
