import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthContext from '../context/UserContext'
import secureLocalStorage from "react-secure-storage";
import ModalContext from '../context/ModalContext'



const NavBar = ({ openSideBar, setOpenSideBar }) => {
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
        <div className="p-3 flex bg-white shadow justify-between sticky top-0 z-50">
            <div className="flex flex-row gap-4 items-center justify-center">
                <button
                    className="rounded-full p-2 hover:bg-black hover:bg-opacity-40 duration-300 hover:text-white"
                    onClick={() => setOpenSideBar(!openSideBar)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
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