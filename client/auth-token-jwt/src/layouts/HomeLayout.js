import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import LeftBar from "../components/Leftbar";

const HomeLayout = () => {
    const [openSideBar, setOpenSideBar] = useState(true)

    return (

        <div className="flex justify-end h-full ">
            <div
                className={`fixed top-0 left-0 bottom-0 w-72 h-screen overflow-auto transition duration-300 bg-sidebar-bg ${openSideBar ? "translate-x-0" : " -translate-x-full"
                    } `}
            >
                <LeftBar
                    // user={user}
                    openSideBar={openSideBar}
                />
            </div>

            <div
                className={`flex h-screen overflow-auto flex-col transition-width duration-300 ${openSideBar ? "w-[calc(100%-18rem)]" : "w-full"
                    } `}
            >
                {/* //TODO should added tabbar name */}
                <NavBar
                    openSideBar={openSideBar}
                    setOpenSideBar={setOpenSideBar}
                />
                <div className="h-screen"><Outlet /></div>
            </div>
        </div>
    )
}

export default HomeLayout