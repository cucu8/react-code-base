import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Profile from '../pages/Profile';
import Login from "../pages/Login"
import Register from "../pages/Register"
import { useContext } from 'react';
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import AuthContext from '../context/UserContext';
import Posts from '../pages/Posts';
import PostDetail from '../pages/PostDetail';
import Admin from '../pages/Admin';
import AdminLayout from '../layouts/AdminLayout';
import Value from '../pages/Value';
import RtookitApi from '../pages/RtookitApi';
import Formik from '../pages/Formik';

const RouteIndex = () => {
    const { user } = useContext(AuthContext)

    return (
        <Routes>
            //* private routes
            <Route path="/" element={user
                ? <HomeLayout />
                : <Navigate to="/auth/login" replace />}>
                <Route index element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:id" element={< PostDetail />} />
                <Route path="/value" element={< Value />} />
                <Route path="/rtoolkitApi" element={< RtookitApi />} />
                <Route path="/formik" element={< Formik />} />
                {/* //* admin dashboard */}
                <Route path="/admin" element={(user?.userType === "admin")
                    ? <AdminLayout />
                    : <Navigate to="/" replace />}
                >
                    <Route index element={<Admin />} />
                </Route>
            </Route >

            //* public routes
            <Route path="/auth" element={!user ? <AuthLayout /> : <Navigate to="/" />} replace>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>


            <Route path="*" element={<Navigate to="/" />} />

        </Routes>
    )
}

export default RouteIndex