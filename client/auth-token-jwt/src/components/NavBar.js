import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthContext from '../context/UserContext'
import secureLocalStorage from "react-secure-storage";
import ModalContext from '../context/ModalContext'



const NavBar = () => {
    const { setUser, user } = useContext(AuthContext)
    const { setOpen } = useContext(ModalContext)
    const navigate = useNavigate()

    const handleLogout = (e) => {

        e.preventDefault();
        secureLocalStorage.clear("auth")
        setUser(null)
        navigate("/auth/login")
    }

    const handleOpenModal = () => {
        setOpen(true)
    }

    return (
        <div>
            <div className='flex flex-row gap-5'>
                {user?.userType === "admin" && <NavLink className={({ isActive }) =>
                    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                } to="/admin">Admin Panel</NavLink>}
                <NavLink className={({ isActive }) =>
                    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                } to="/">Home</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                } to="/profile">Profile</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                } to="/posts">Posts</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                } to="/value">Value</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                } to="/rtoolkitApi">Reduk toolkit Api</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                } to="/formik">Formik</NavLink>
                <button onClick={handleOpenModal} >Open Modal</button>
                <button onClick={handleLogout} >Logout</button>
            </div>
        </div>
    )
}

export default NavBar