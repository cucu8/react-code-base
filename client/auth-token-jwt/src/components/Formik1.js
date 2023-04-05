import React, { useState } from 'react'
import FormInput from './FormItems/FormInput'

const Formik1 = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" })

    const handleChange = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
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
            pattern: "^.{4,16}$",
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }

    return (
        <div className='flex flex-col '>
            <h1>Register Without formik</h1>
            <form onSubmit={handleSubmit} >
                <div className='flex flex-col'>
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
                <button type='submit' className='bg-green-300 p-3'>Submit</button>
            </form>
        </div>
    )
}

export default Formik1