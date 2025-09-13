import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../Components/loginForm'
import {auth, signInWithEmailAndPassword} from '../config/firebase'

function Login() {

  const loginUser = (value) => {
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error);

      });
  }
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <h1>Login Form</h1>

        <LoginForm getUser={loginUser}/>

        <p>
          Already have an account? <Link to={'/signup'}>SignUp</Link>
        </p>
      </div>
    </>

  )
}

export default Login
