import React from "react";
import Circle_Img from '../../assests/Navbar_Images/circle_img.png';
import '../Header/Navbar.css'
import Mask_Group from '../../assests/Navbar_Images/Mask_Group.png'
import notification from '../../assests/Navbar_Images/notification.png'
import account from '../../assests/Navbar_Images/account.png'

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light  header">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <ul className="navbar-nav me-auto  mb-lg-0">
                            <li className="nav-item">
                                <img src={Circle_Img} alt="" className="Navbar" />
                            </li>
                            <li className="nav-item">
                                <img src={Mask_Group} alt="" className="Mask_Group" />
                            </li>
                            <li className="nav-item">
                                <div className="vertical-bar" />
                            </li>
                            <li className="nav-item branch">
                                <span className="">Branch - Walunj</span>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-brand ml-auto">
                        <ul className="navbar-nav right-content">
                            <li className="nav-item Notification">
                                <img src={notification} alt="" className="notification" />
                            </li>
                            <li className="nav-item">
                                <div className="vertical-bar" />
                            </li>
                            <li className="nav-item hello-admin">
                                <p>Hello Admin</p>
                            </li>
                            <li className="nav-item account">
                                <img src={account} alt="" />
                            </li>
                            <li className="nav-item dropdown-icon">
                                <i className="bi bi-caret-down-fill"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}


