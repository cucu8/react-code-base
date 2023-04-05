import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = ({ chidren }) => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default AdminLayout