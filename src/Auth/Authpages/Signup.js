import { useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import '../AuthStyles/style.css'
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';





function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");


  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };




  return (
    <div className="signupPageContainer">
      <ToastContainer />
    <div className="signup">
      <div>
        <h1> Register User </h1>
        <form>
        <input
         className='input'
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          className='input'
          placeholder="Password..."
          type="password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        </form>

        <button onClick={register}> Sign Up</button>
      </div>

      <Link to='/signin'>Sign In</Link>
    </div>
    </div>
  );
}

export default Signup;
