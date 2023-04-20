import React from 'react';
import { Link } from 'react-router-dom'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function Header(props) {
    return (
        <div>
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
                <div className="container">
                    <a className="navbar-brand" href="/">Furni<span>.</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li><Link className="nav-link scrollto active" to={"/"} exact>Home</Link></li>
                            <li><Link className="nav-link scrollto" to={'/shop'} exact>Shop</Link></li>
                            <li><Link className="nav-link scrollto" to={'/about'} exact>About us</Link></li>
                            <li><Link className="nav-link scrollto" to={'/services'} exact>Services</Link></li>
                            <li><Link className="nav-link scrollto" to={'/blog'} exact>Blog</Link></li>
                            <li><Link className="nav-link scrollto" to={'/contact'} exact>Contact us</Link></li>
                        </ul>
                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li><Link className="nav-link" to={'/auth'}><img src="assets/images/user.svg" /></Link></li>
                            <li><Link className="nav-link" to={'/cart'}><img src="assets/images/cart.svg" /></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Header;