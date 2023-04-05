import React from 'react'

const FormIpurComponentFormik = ({ ...props }) => {
    console.log("🚀 ~ file: FormIpurComponentFormik.js:4 ~ FormIpurComponentFormik ~ props:", props)

    return (
        <div>
            <input className={`border-2 transition-all duration-500 leading-8 ${props.touched && props.errorMessage && "border-red-500"}`} {...props} />
            <div id="feedback">{props.touched && props.errorMessage}</div>
        </div>
    )
}

export default FormIpurComponentFormik