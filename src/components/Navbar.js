import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCommentDots,
    faBars,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
    const [nav, setNav] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const openNav = () => {
        setNav(!nav);
    };

    const handleChatBtnClick = () => {
        if (!isButtonDisabled) {
            window.location.href = "/login"; 
        }
    };

    return (
        <div className="navbar-section">
            <h1 className="navbar-title">
                <Link to="/">
                    VitaLink <span className="navbar-sign">+</span>
                </Link>
            </h1>

            {/* Desktop */}
            <ul className="navbar-items">
                <li>
                    <Link to="/" className="navbar-links">
                        Home
                    </Link>
                </li>
                <li>
                    <a href="#services" className="navbar-links">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#about" className="navbar-links">
                        About
                    </a>
                </li>
                <li>
                    <a href="#reviews" className="navbar-links">
                        Reviews
                    </a>
                </li>
                <li>
                    <a href="#doctors" className="navbar-links">
                        Nearby Share
                    </a>
                </li>
            </ul>

            <button
                className="navbar-btn"
                type="button"
                disabled={isButtonDisabled}
                onClick={handleChatBtnClick}
            > Login 
            </button>

            {/* Mobile */}
            <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
                <div onClick={openNav} className="mobile-navbar-close">
                    <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
                </div>

                <ul className="mobile-navbar-links">
                    <li>
                        <Link onClick={openNav} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <a onClick={openNav} href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a onClick={openNav} href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a onClick={openNav} href="#reviews">
                            Reviews
                        </a>
                    </li>
                    <li>
                        <a onClick={openNav} href="#doctors">
                            Doctors
                        </a>
                    </li>
                    <li>
                        <a onClick={openNav} href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Hamburger Icon */}
            <div className="mobile-nav">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={openNav}
                    className="hamb-icon"
                />
            </div>
        </div>
    );
}

export default Navbar;
