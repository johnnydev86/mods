
import { useState } from "react";
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

export default function LogInOutandState() {

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };


  return (
    <div>
    <h4> User Logged In: </h4>
    {user?.email}

    <button onClick={logout}> Sign Out </button>
    </div>
  )
}

