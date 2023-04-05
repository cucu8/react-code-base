import React from 'react'
import Formik1 from '../components/Formik1'
import Formik2 from '../components/Formik2'
import Formik3 from '../components/Formik3'

const Formik = () => {
    return (
        <div className="grid grid-cols-6 p-5 h-[calc(100vh-20px)]">

            <div className=" col-span-2">
                <span>Without Formik</span>
                <Formik1 />
            </div>
            <div className=" col-span-2">
                <span> Component Formik</span>
                <Formik2 />
            </div>
            <div className=" col-span-2">
                <span>useFormik</span>
                <Formik3 />
            </div>
        </div>
    )
}

export default Formik