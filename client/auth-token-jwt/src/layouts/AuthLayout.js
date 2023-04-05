import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div>
            <h1>AuthLayout</h1>
            <div className='flex flex-row gap-10 bg-gray-400 '>
                <NavLink to="/auth/login">Login</NavLink>
                <NavLink to="/auth/register">Register</NavLink>
            </div>
            <Outlet />

        </div>
    )
}

export default AuthLayout