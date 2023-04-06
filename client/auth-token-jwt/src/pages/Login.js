import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import toast from 'react-hot-toast';
import AuthContext from "../context/UserContext";
import FormInput from '../components/FormItems/FormInput';

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
    const inputs = [

        {
            id: 1,
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
            errormessage: "It should be a valid email address!",
            required: true,
        },
        {
            id: 2,
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
            pattern: "^.{6,16}$",
            errormessage: "Password should be 4-16 characters ",
            required: true,
        },

    ];


    return (
        <div className='flex flex-col w-full h-screen justify-center items-center'>
            <h1 className='text-2xl text-black'>Login</h1>
            <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center items-center'>
                <div className='flex flex-col w-1/2 '>
                    {
                        inputs.map((item) => (
                            <FormInput
                                key={item.id}
                                {...item}
                                onChange={handleChange}
                            />
                        ))
                    }
                </div>
                <div className='flex flex-row justify-center items-center gap-5 mt-2 w-full'>
                    <button type='submit' className='bg-green-300 p-2 hover:bg-green-600 hover:text-white rounded'>Giriş yap</button>
                    <button
                        className='underline underline-offset-1 text-black  cursor-pointer'
                        onClick={() => navigate("/auth/register")}
                        type='button'
                    >
                        Üye ol
                    </button>
                </div>
            </form>
        </div >
    )
}

export default Login