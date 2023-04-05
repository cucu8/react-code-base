import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import toast from 'react-hot-toast';
import AuthContext from '../context/UserContext';

const Register = () => {
    const [form, setForm] = useState({ username: "", email: "", password: "" })
    const { register } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        register(form)

    }

    return (
        <div className='flex flex-col w-full h-screen justify-center items-center bg-gray-300'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                UserName
                <input type="text" onChange={handleChange} name="username" />

                Email
                <input type="text" onChange={handleChange} name="email" />
                Password
                <input type="password" onChange={handleChange} name="password" />
                <button
                    type="submit"
                    className='bg-blue-700 text-white'
                    onClick={handleSubmit}
                    disabled={!form.username || !form.email || !form.password}
                >
                    Register
                </button>
            </form>
            <button
                className='bg-green-700 text-white cursor-pointer'
                onClick={() => navigate("/auth/login")}
            >
                Üyeliğim var
            </button>
        </div >
    )
}

export default Register