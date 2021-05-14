import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { register } from '../redux/secretApp/authActions';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const Register = () => {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector(state => state.messages);
    const dispatch = useDispatch();

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
        form.current.validateAll();

        if (checkBtn.current.context._error.length === 0) {
            dispatch(register(username, firstName, lastName, email, password))
                .then(() => {
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };

    return (
        <div className="register-form">
            <Form onSubmit={handleRegister} ref={form}>
                {!successful && (
                    <div>
                        <div className="form-group">
                            <label htmlFor="username">Username: </label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                required={vusername}
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
                                required={vpassword}
                                value={password}
                                onChange={onChangePassword}
                            />
                        </div>
                        <div className="sigup-btn">
                            <button className="btn btn-primary btn-block" >sign up</button>
                        </div>
                    </div>
                )}

                {message && (
                    <div className="form-group">
                        <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                            {message}
                        </div>
                    </div>
                )}

                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
        </div>
    )
}

export default Register
