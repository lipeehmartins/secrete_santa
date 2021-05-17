import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';


const SecretApp = () => {
    return (
        <Router>
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/addName">
                    </Route>
                </Switch>
        </Router>
    )
}

export default SecretApp;

