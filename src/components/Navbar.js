import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="Navbar">
                <Link className='navbar-brand' to="/">JohnMacIntire.com</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Link to="/contact" className='nav-link'>Contact</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/solutions" className='nav-link'>Solutions</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/certifications" className='nav-link'>Certifications</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;