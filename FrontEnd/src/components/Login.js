import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector, } from 'react-redux';
import {  useHistory } from 'react-router-dom';
import { login } from '../redux/secretApp/authActions';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

const Login = (props) => {
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const isLogged = useSelector(state => state.auth.isLogged);
    const user = useSelector(state => state.auth.user);

    const dispatch = useDispatch();
    

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        if (username.trim() && password.trim()) {
            dispatch(login(username, password))
        } else {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isLogged) {
            localStorage.setItem("token", user.token);
            return history.push("/profile")
        }
    }, [isLogged]);


    return (
        <Form onSubmit={handleLogin}>

            <div className="login-form">
                <div className="fomr-group">
                    <label htmlFor="username">Username: </label>
                    <Input type="text"
                        className="form-control"
                        name="username"
                        required
                        value={username}
                        onChange={onChangeUsername}
                    />
                </div>
                <div className="fomr-group">
                    <label htmlFor="password">Password: </label>
                    <Input type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        required
                    />
                </div>
                <div className="login-btn">
                    <button className="btn btn-danger btn-block" disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span className="login">Login</span>
                    </button>
                </div>
            </div>
        </Form>
    )
}

const mapStateToProps = (state) => ({
    isLogged: state.isLogged,
    user: state.user,
})

export default connect(mapStateToProps, null)(Login);