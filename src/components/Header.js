import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <h3 className="title">JohnMacIntire.com</h3>
                <div className="nav-links">
                    <a href="/contact">Contact</a>
                    <a href="/services">Services</a>
                    <a href="/about">About</a>
                </div>
            </header>
        )
    }
}

export default Header;