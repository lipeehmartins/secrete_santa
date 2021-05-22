import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/secretApp/authActions'
import logo from '../logo.png'

const Navbar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-danger" id="navbar">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
                <button className="btn btn-light btn-block" onClick={handleLogout}>Logout</button>
            </div>
        </nav>

    );
};

export default Navbar;