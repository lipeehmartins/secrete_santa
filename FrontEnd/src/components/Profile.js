import React from "react";
import AddName from '../components/AddName';
import NameList from '../components/NameList';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
    const { user: currentUser } = useSelector((state) => state.auth);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{currentUser.username}</strong> Profile
        </h3>
            </header>
            <p>
                <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
                {currentUser.token.substr(currentUser.token.length - 20)}
            </p>
            <p>
                <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
            <ul>
                {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
            <AddName />
            <NameList />
        </div>

    );
};

export default Profile;