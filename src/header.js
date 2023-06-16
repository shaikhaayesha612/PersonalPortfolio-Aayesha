import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

const Header = props => {
        const [isNavCollapsed, setIsNavCollapsed] = useState(true);
      
        const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return(
        <>
            <nav class="navbar navbar-expand-lg p-3 sticky-top">
                <a class="navbar-brand text-white fw-bold pe-5 ps-5 logo" href="#"> Portfolio </a>
                <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span class="navbar-toggler-icon t-icon"></span>
                </button>

                <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white nav-item" to="/"><i className="fa fa-home"></i> Home </Link>
                        </li>
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/about"> <i className="fa fa-user"></i> About </Link>
                        </li>
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/skills_ach"> <i className="fa fa-list"></i> Skills & Achievement </Link>
                        </li>
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/portfolio"> <i className="fa fa-suitcase"></i> Portfolio </Link>
                        </li>
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/contact"> <i className="fa fa-address-book"></i> Contact </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <nav className="navbar navbar-expand-md p-3 sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fw-bold pe-5 ps-5 logo" href="#">Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ps-5">
                                <Link className="nav-link text-white nav-item" to="/"><i className="fa fa-home"></i> Home </Link>
                            </li>
                            <li className="nav-item ps-5">
                                <Link className="nav-link text-white" to="/about"> <i className="fa fa-user"></i> About </Link>
                            </li>
                            <li className="nav-item ps-5">
                                <Link className="nav-link text-white" to="/skills_ach"> <i className="fa fa-list"></i> Skills & Achievement </Link>
                            </li>
                            <li className="nav-item ps-5">
                                <Link className="nav-link text-white" to="/portfolio"> <i className="fa fa-suitcase"></i> Portfolio </Link>
                            </li>
                            <li className="nav-item ps-5">
                                <Link className="nav-link text-white" to="/contact"> <i className="fa fa-address-book"></i> Contact </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>  */}

        </>
    )
}

export default Header;