import { useEffect, useRef, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from '@firebase/auth';

import { auth } from '../Firebase/firebaseConfig'

const UseAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const authenticate = getAuth(auth);
  
    let mounted = useRef<boolean>(false);
  
    useEffect(() => {
      mounted.current = true;
      const unsubscribe = onAuthStateChanged(authenticate, (user) => {
        console.log("onAuthUserChanged", user);
        if (user) {
          if (mounted.current) {
            setUser(user);
          }
        } else {
          if (mounted.current) {
            setUser(null);
          }
        }
      });
  
      return () => {
        mounted.current = false;
        unsubscribe();
      };
    }, [authenticate]);
  
    return {
      user,
      auth,
    };
  };
  
  export { UseAuth };
