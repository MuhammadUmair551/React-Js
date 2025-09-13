import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import { Button, Checkbox, Form, Input } from 'antd';
import { auth, onAuthStateChanged } from '../config/firebase'
import Home from '../Components/Home'
import Welcome from '../Components/welcome'

function Router() {

    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid);
                setIsUser(true);
            } else {
                setIsUser(false);
                console.log('logout howa va ha');
            }
        });
    }, [])


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home> <Welcome /> </Home>} />
                <Route path='/signup' element={isUser ? <Profile /> : <Home><Signup /></Home>} />
                <Route path='/login' element={isUser ? <Profile /> : <Home><Login /></Home>} />
                <Route path='/profile' element={!isUser ? <Home><Login /></Home> : <Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
