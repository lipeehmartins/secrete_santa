import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'; 
import logo from '../logo.png'

const Home = () => {
    let history = useHistory();
    const isLogged = useSelector(state => state.auth.isLogged);
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        if (isLogged) {
            localStorage.setItem("token", user.token);
            return history.push("/profile")
        }
    }, [isLogged]);

    return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-danger" id="navbar">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
                <Link className="btn btn-light btn-block" to={'/login'}>Login</Link>
            </div>
        </nav>
        <h1 className="title">Welcome to the Secret Santa</h1>
        <h2>Sign up to create your list of people to celebrate the christmas</h2>
        <Link className="btn btn-danger btn-block" to={'/register'}>Sign up</Link><br/>
        </div>
    )
}

export default Home
