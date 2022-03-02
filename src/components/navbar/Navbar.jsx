import React from "react";
import { ScNavbar } from "./navbar.styled";

const Navbar = ({ toggleMenu }) => {
    return (
        <ScNavbar>
            <div className="navbar__container">
                <div className="navbar__logo">
                    <div className="navbar__logo-img">L</div>
                    <div className="navbar__logo-text">
                        <p className="navbar__logo-text1">Lampa</p>
                    </div>
                </div>
            </div>
            <div
                className={
                    toggleMenu
                        ? "navbar__links navbar__active"
                        : "navbar__links"
                }
            >
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
