import React from 'react';
import './header.css';


class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark static-top header-style">
                <div>
                    <a className="navbar-brand" href="#">
                        <img src="equifax_logo.webp" className="logo-style" />
                    </a>
                </div>
            </nav>
        )
    }
}

export default Header;