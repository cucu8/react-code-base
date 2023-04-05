import React, { useState } from 'react'

const FormInput = ({ label, handleChange, ...item }) => {

    const [focused, setFocused] = useState(false)

    const handleBlur = () => {
        setFocused(true)
    }

    const handleFocus = () => {
        item.name === "confirmPassword" && setFocused(true)
    }

    return (
        <div className='flex flex-col px-5' >
            <label className=''>{label}</label>

            <input
                className={`border-2 transition-all outline-none duration-500 peer leading-8 ${focused && "invalid:border-red-500"}  valid:border-green-500`}
                onChange={handleChange}
                onBlur={handleBlur}
                {...item}
                pattern={item.pattern}
                onFocus={handleFocus}
            />
            <p
                className={`invisible  ${focused && "peer-invalid:visible"} text-red-700 font-light`}
            >
                {item.errormessage}
            </p>
        </div>
    )
}

export default FormInput