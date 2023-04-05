import React, { createContext, useState } from 'react'

const ModalContext = createContext()
export default ModalContext

export const ModalProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const value = {
        open,
        setOpen
    }
    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}
