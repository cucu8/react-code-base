import React, { useContext, useState } from 'react'
import ModalContext from '../context/ModalContext'


const Modal = () => {
    const { open, setOpen } = useContext(ModalContext)
    if (open === false) return null

    const handleCloseModal = () => {
        setOpen(false)
    }
    return (
        <div className='w-full h-screen bg-opacity-50 bg-black fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
            <div className='bg-white rounded w-1/3 h-1/3 p-3'>
                <div className='flex w-full justify-end items-end'>
                    <button
                        onClick={handleCloseModal}
                        className="cursor-pointer hover:bg-slate-600 hover:text-white rounded p-1"> X </button>
                </div>
            </div>
        </div>
    )
}

export default Modal