import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import AppNavbar from '../Components/Navbar'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<AppNavbar> <Home /> </AppNavbar>} />
                <Route path='/about' element={<AppNavbar> <About /> </AppNavbar>} />
                <Route path='/contact' element={<AppNavbar> <Contact /> </AppNavbar>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
