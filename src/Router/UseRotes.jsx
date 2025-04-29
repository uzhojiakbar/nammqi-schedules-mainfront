import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/login/Login'
import Register from '../Pages/register/Register'
import Profile from '../Pages/users/Profile'

function UseRotes() {
    const role = 'user'

    if (role == 'admin') {
        return (
            <Routes>
                <Route path='/' element={<h1>Admin page</h1>} />
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/proflie' element={<Profile />} />
            </Routes>
        )
    }
}

export default UseRotes
