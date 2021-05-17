import { REGISTER_VALIDATED, REGISTER_INVALIDATED, LOGIN_VALIDATED, LOGIN_INVALIDATED, LOGOUT, SEND_MESSAGE } from './secretAppType'
import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/"

export const register = (username, first_name, last_name, email, password) => (dispatch) => {
    axios.post(API_URL + "viewset/user/", {
        username,
        first_name,
        last_name,
        email,
        password
    })
        .then((response) => {
            dispatch({
                type: REGISTER_VALIDATED,
            });

        }).catch((error) => {
            dispatch({
                type: REGISTER_INVALIDATED,
            })
        })
};


export const login = (username, password) => (dispatch) => {
    axios.post(API_URL + 'login/', {
        username,
        password
    })
        .then((response) => {
            if (response.data.token) {
                dispatch({
                    type: LOGIN_VALIDATED,
                    payload: response.data,
                });
            }
        }).catch((error) => {
            dispatch({
                type: LOGIN_INVALIDATED,
            })
        })
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
        type: LOGOUT,
    });
};
