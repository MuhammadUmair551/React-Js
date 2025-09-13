import React from 'react'
import { Link, Links, useNavigate } from 'react-router-dom'
import SignupForm from '../Components/signUpForm'
import { auth, createUserWithEmailAndPassword } from '../config/firebase'

function Signup() {

  const navigate = useNavigate();
  const registerUser = (value) => {
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <h1>Sign Up Form</h1>

        <SignupForm registerKey={registerUser} />

        <p>
          Already have an account? <Link to={'/login'}>Login</Link>
        </p>
      </div>

    </>
  )
}

export default Signup
