import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { register } from '../redux/secretApp/authActions';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { useHistory } from 'react-router';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [successful, setSuccessful] = useState(false);
    const success = useSelector(state => state.auth.success);
    const dispatch = useDispatch();
    const history = useHistory();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangeFirstName = (e) => {
        const firstName = e.target.value;
        setFirstName(firstName);
    }

    const onChangeLastName = (e) => {
        const lastName = e.target.value;
        setLastName(lastName);
    }

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);

        dispatch(register(username, firstName, lastName, email, password))
           
    };

    useEffect(() => {
        if(success) history.push("/login")
    },[success]);

    return (
        <div className="register-form">
            <Form onSubmit={handleRegister}>
                {!successful && (
                    <div>
                        <div className="form-group">
                            <label htmlFor="username">Username: </label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                required
                                value={username}
                                onChange={onChangeUsername}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">First Name: </label>
                            <Input
                                type="text"
                                className="form-control"
                                name="firstName"
                                required
                                value={firstName}
                                onChange={onChangeFirstName}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Last Name: </label>
                            <Input
                                type="text"
                                className="form-control"
                                name="lastName"
                                required
                                value={lastName}
                                onChange={onChangeLastName}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <Input
                                type="text"
                                className="form-control"
                                name="email"
                                required
                                value={email}
                                onChange={onChangeEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                required
                                value={password}
                                onChange={onChangePassword}
                            />
                        </div>
                        <div className="sigup-btn">
                            <button className="btn btn-danger btn-block" >sign up</button>
                        </div>
                    </div>
                )}


            </Form>
        </div>
    )
}

export default Register
