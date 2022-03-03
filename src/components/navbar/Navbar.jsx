import React from "react";
import { ScNavbar } from "./navbar.styled";

const Navbar = ({ toggleMenu, clickToClose }) => {
    return (
        <ScNavbar>
            <div className="navbar__container">
                <div className="navbar__logo">
                    <div className="navbar__logo-img">
                        <a href="#home">L</a>
                    </div>
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
                    <li className="navbar__links-li">
                        <a href="#home" onClick={clickToClose}>
                            Home
                        </a>
                    </li>
                    <li className="navbar__links-li">
                        <a href="#gallery" onClick={clickToClose}>
                            Gallery
                        </a>
                    </li>
                    <li className="navbar__links-li">
                        <a href="#price" onClick={clickToClose}>
                            Price
                        </a>
                    </li>
                    <li className="navbar__links-li">
                        <a href="#stories" onClick={clickToClose}>
                            Stories
                        </a>
                    </li>
                    <li className="navbar__links-li">
                        <a href="#milestones" onClick={clickToClose}>
                            Milestones
                        </a>
                    </li>
                </ul>
            </div>
        </ScNavbar>
    );
};

export default Navbar;
