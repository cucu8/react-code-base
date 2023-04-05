import React from 'react'

const FormInputFormik = ({ label, ...item }) => {
    return (
        <div className='flex flex-col'>
            <span>{label}</span>
            <input
                className={`border-2 transition-all duration-500 leading-8 ${item.touched && item.errorMessage && "border-red-500"}`}
                {...item}
            />
            <span className='text-red-500 font-thin'>{item.touched && item.errorMessage}</span>

        </div>
    )
}

export default FormInputFormik