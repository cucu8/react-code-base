import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import toast from 'react-hot-toast';
import AuthContext from '../context/UserContext';
import FormInput from '../components/FormItems/FormInput';


const Register = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" })
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
    const inputs = [
        {
            id: 1,
            name: "username",
            label: "Username",
            type: "text",
            placeholder: "Enter your username",
            errormessage: "Username should be 3-16 characters and shouldn't character!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
            errormessage: "It should be a valid email address!",
            required: true,
        },
        {
            id: 3,
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
            pattern: "^.{6,16}$",
            errormessage: "Password should be 4-16 characters ",
            required: true,
        },
        {
            id: 4,
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            placeholder: "Enter your Confirm Password",
            pattern: form.password,
            errormessage: "Passwords don't match!",
            required: true,
        },
    ];

    return (
        <div className='flex flex-col w-full h-screen justify-center items-center'>
            <h1 className='text-2xl text-black'>Register</h1>
            <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center items-center'>
                <div className='flex flex-col w-1/2'>
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
                    <button type='submit' className='bg-green-300 p-2 hover:bg-green-600 hover:text-white rounded'>Üye ol</button>
                    <button
                        className='underline underline-offset-1 text-black  cursor-pointer'
                        onClick={() => navigate("/auth/login")}
                        type='button'
                    >
                        Üyeliğim var
                    </button>
                </div>
            </form>
        </div >
    )
}

export default Register