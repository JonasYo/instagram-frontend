import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css';

import logo from '../assets/logo.png';
import camera from '../assets/camera.png';

export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                    <img src={logo} alt="InstaRockt" />
                </Link>
                <Link to="/new">
                <img src={camera} alt="InstaRockt" />
                </Link>
            </div>
        </header>
    );
}
