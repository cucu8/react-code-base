import React, { useState } from 'react'
import FormInputFormik from './FormItems/FormInputFormik';
import { useFormik } from "formik"
import { inputSchema } from '../schemas';

const Formik3 = () => {
    const onSubmit = (values, actions) => {
        console.log(values)
        console.log(actions)
        actions.resetForm()
    }

    const {
        values,
        handleSubmit,
        handleBlur,
        handleChange,
        errors,
        touched,// tıklanılan input true
        isSubmitting //form submit ise true
    } = useFormik({
        initialValues: { userName: "", email: "", password: "", confirmPassword: "" },
        validationSchema: inputSchema,
        onSubmit,
    })


    const inputs = [
        {
            name: "userName",
            label: "Username",
            type: "text",
            placeholder: "Enter your username",
            value: values.userName,
            errorMessage: errors.userName,
            touched: touched.userName
        },
        {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,

        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password
        },
        {
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            placeholder: "Enter your Confirm Password",
            value: values.confirmPassword,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword
        },
    ];

    return (
        <div className='flex flex-col '>
            <h1>Register Without formik</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    {
                        inputs.map((item) => (
                            <FormInputFormik
                                key={item.name}
                                {...item}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        ))
                    }
                </div>
                <button type='submit' className='bg-green-300 p-3'>Submit</button>
            </form>
        </div>
    )
}

export default Formik3
// Bu parametreler, Formik kütüphanesinin form yönetim işlevlerinin daha ayrıntılı kontrolünü sağlar.

//     setErrors(errors: FormikErrors < Values >): Bu işlev, formdaki hataları ayarlamak için kullanılır.Formdaki hataları errors parametresinde belirtilen hatalara ayarlar.

// setFieldError(field: string, message: string | undefined): Bu işlev, belirtilen alan için bir hata mesajı ayarlar.

// setFieldTouched(field: string, isTouched ?: boolean, shouldValidate ?: boolean): Bu işlev, belirtilen alanın dokunulduğunu işaretler.isTouched parametresi, alanın dokunulduğunu gösterirken, shouldValidate parametresi, alanın doğruluğunu kontrol edip etmemeyi belirler.

//  setFieldValue(field: string, value: any, shouldValidate ?: boolean): Bu işlev, belirtilen alanın değerini ayarlar.shouldValidate parametresi, alanın doğruluğunu kontrol edip etmemeyi belirler.

//  setFormikState(state: FormikState < Values >): Bu işlev, Formik durumunu güncellemek için kullanılır.

//  setStatus(status ?: any): Bu işlev, form durumunu belirlemek için kullanılır.Bu özellik, onSubmit işlevinde kullanılabilir.

//  setSubmitting(isSubmitting: boolean): Bu işlev, form gönderme işleminin durumunu belirlemek için kullanılır.isSubmitting parametresi, gönderme işleminin durumunu belirtir.

// etTouched(touched: FormikTouched < Values >): Bu işlev, formdaki dokunulmuş alanları ayarlamak için kullanılır.touched parametresi, dokunulmuş alanları belirtir.

// setValues(values: Values, shouldValidate ?: boolean): Bu işlev, formdaki tüm alanların değerlerini ayarlar.shouldValidate parametresi, tüm alanların doğruluğunu kontrol edip etmemeyi belirler.

//                                         submitForm(): Promise < void>: Bu işlev, formu sunucuya göndermek için kullanılır.Bu işlev, onSubmit işlevinde kullanılır ve form verileri sunucuya gönderilmeden önce özel işlemler yapmak için kullanılabilir.