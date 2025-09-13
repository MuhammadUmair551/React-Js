import React from 'react'
import { auth, signOut } from '../config/firebase'


function Profile() {

  let signOutUser = () => {
    signOut(auth).then(() => {
      console.log('logout hogaya');
    }).catch((error) => {
      console.log(error);
    });
  }
  
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={signOutUser}>Logout</button>
    </div>
  )
}

export default Profile
