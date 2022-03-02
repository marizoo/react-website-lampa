import React from "react";
import Section from "../../UI/Section";
import { ScFooter } from "./footer.styled";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <ScFooter>
            <Section>
                <div className="footer__container">
                    {/* logo */}
                    <div className="navbar__logo">
                        <div className="navbar__logo-img">L</div>
                        <div className="navbar__logo-text">
                            <p className="navbar__logo-text1">Lampa</p>
                        </div>
                    </div>
                    {/* logo end */}
                    <div className="footer__socialMedia">
                        <span className="footer__socialMedia-logo">
                            <FaFacebook />
                        </span>
                        <span className="footer__socialMedia-logo">
                            <FaTwitter />
                        </span>
                        <span className="footer__socialMedia-logo">
                            <FaInstagram />
                        </span>
                    </div>
                    <div className="footer__address">
                        <p className="footer__address-1">
                            Kentucky Fried Chicken 321
                        </p>
                        <p className="footer__address-2">+1 9876 543 123</p>
                        <p className="footer__address-3">enquiry@lampa.com</p>
                    </div>
                    <div className="footer__copyright">
                        <p className="footer__copyright-text-1">
                            &copy; All Rights Reserved
                        </p>
                        <p className="footer__copyright-text-2">
                            Marizoo &#128526; 2022
                        </p>
                    </div>
                </div>
            </Section>
        </ScFooter>
    );
};

export default Footer;
