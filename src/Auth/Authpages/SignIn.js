
import { useState } from "react";
import {
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth, signInWithGoogle } from "../Firebase/firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import LogInOutandState from '../AuthComponents/LogInOutandState'

function Signin() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");




  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      if(error.code === 'auth/wrong-password'){
        toast.error('Please check the Password');
      }
      if(error.code === 'auth/user-not-found'){
        toast.error('Please check the Email');
      }
    }
  };



  return (
    <div className='loginPageContainer'>
      <ToastContainer />
     <div className='logInOut'> <LogInOutandState /></div>
    <div className="login">
     

      <div>
        <h1> Login </h1>
        <form>
        
        <input
        className='input'
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
        className='input'
          placeholder="Password..."
          type="password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
       <Link to='/ForgotPassword'>Forgot Password</Link>

        </form>
        <button onClick={login}> Login</button>
        <button onClick={signInWithGoogle}>Login with google</button>
      </div>
       <Link to='/signup'>Sign Up</Link>

    </div>
    </div>
  );
}

export default Signin;