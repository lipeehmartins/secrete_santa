import React from "react";
import AddName from '../components/AddName';
import NameList from '../components/NameList';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import PickedName from "./PickedName";

const Profile = () => {
    const { user } = useSelector((state) => state.auth);

    if (!user) {
        return <Redirect to="/login" />;
    }

    return (
        
        <div className="container">
            <header className="jumbotron">
                <Navbar/>
                <h3>
                    <strong>Profile:</strong> {user.first_name}
                </h3>
            </header>
            <p>
                <strong>User:</strong> {user.username}
            </p>
            <p>
                <strong>Email:</strong> {user.email}
            </p>
            <AddName /><br/>
            <NameList /><br/>
            <PickedName />

        </div>

    );
};

export default Profile;