import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import toast from 'react-hot-toast';
import AuthContext from "../context/UserContext";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" })
    const { user, setUser, login } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(form)
    }

    return (
        <div className='flex flex-col w-full h-screen justify-center items-center bg-gray-300'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                Email
                <input type="text" onChange={handleChange} name="email" />
                Password
                <input type="password" onChange={handleChange} name="password" />
                <button type="submit" className='bg-blue-700 text-white'>Login</button>
            </form>
            <button

                className='bg-green-700 text-white'
                onClick={() => navigate("/auth/register")}
            >
                Üye değilim
            </button>
        </div >
    )
}

export default Login