import React from "react";
import { ScNavbar } from "./navbar.styled";

const Navbar = () => {
    return (
        <ScNavbar>
            <div className="navbar__logo">
                <div className="navbar__logo-img">L</div>
                <div className="navbar__logo-text">
                    <p className="navbar__logo-text1">Lampy</p>
                    <p className="navbar__logo-text2">Lampsss</p>
                </div>
            </div>
            <div className="navbar__links">
                <ul className="navbar__links-ul">
                    <li className="navbar__links-li">About</li>
                    <li className="navbar__links-li">Gallery</li>
                    <li className="navbar__links-li">Stories</li>
                    <li className="navbar__links-li">Home</li>
                </ul>
            </div>
        </ScNavbar>
    );
};

export default Navbar;
