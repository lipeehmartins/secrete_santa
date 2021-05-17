import React from "react";
import AddName from '../components/AddName';
import NameList from '../components/NameList';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
    const { user } = useSelector((state) => state.auth);

    if (!user) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{user.first_name}</strong> Profile
                </h3>
            </header>
            <p>
                <strong>Token:</strong> {user.token}
            </p>
            <p>
                <strong>User:</strong> {user.username}
            </p>
            <p>
                <strong>Email:</strong> {user.email}
            </p>
            <ul>
                {/* {user.roles &&
                    user.roles.map((role, index) => <li key={index}>{role}</li>)} */}
            </ul>
            <AddName />
            <NameList />
        </div>

    );
};

export default Profile;