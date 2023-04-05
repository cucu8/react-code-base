import { Formik } from 'formik';
import React from 'react'
import { inputSchema } from '../schemas';
import FormIpurComponentFormik from './FormItems/FormIpurComponentFormik';

const Formik2 = () => {

    const inputs = [
        {
            name: "userName",
            label: "Username",
            type: "text",
            placeholder: "Enter your username",

        },
        {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email",


        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your password",

        },
        {
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            placeholder: "Enter your Confirm Password",

        },
    ];

    return (
        <div className='flex flex-col'>
            <Formik
                initialValues={{ userName: "", email: "", password: "", confirmPassword: "" }}
                validationSchema={inputSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        {
                            inputs.map((item) => (
                                <FormIpurComponentFormik
                                    errorMessage={props.errors[item.name]}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    touched={props.touched[item.name]}
                                    value={props.values[item.name]}
                                    {...item}
                                />
                            ))
                        }
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}



export default Formik2