import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Root;