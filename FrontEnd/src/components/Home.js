import React from 'react'
import { Link } from 'react-router-dom'; 

const Home = () => {
    return (
        <div className="container">
        <h1 className="title">Welcome to the Secret Santa</h1>
        <h2>Sign up to create your list of people to celebrate the christmas</h2>
        <Link to={'/register'}>Sign up</Link>
        </div>
    )
}

export default Home
