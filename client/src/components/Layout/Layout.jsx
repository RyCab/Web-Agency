import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import './styles.css';

export const Layout = () => {
    return (
        <div className="layout-con">
            <Navbar/>
            <Outlet />
            <Footer />
        </div>
    );
}