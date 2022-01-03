import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <p className="navbar-brand d-lg-none main-header" >Tr<i className="fas fa-mountain"></i>velsphere</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbarToggler7"
                aria-controls="myNavbarToggler7" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNavbarToggler7">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <p className="nav-link" >Blog</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" >Weather</p>
                    </li>
                    <h1 className="d-none d-lg-block main-header" >Tr<i className="fas fa-mountain"></i>velsphere</h1>
                    <li className="nav-item">
                        <p className="nav-link" >Bucket List</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" >Countdown</p>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;

// blog, login/logout, weather, countdown, bucket list 