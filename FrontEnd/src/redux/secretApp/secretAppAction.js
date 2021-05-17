import { ADD_NAME, ADD_NAME_ERROR, PICKED_NAME, PICKED_NAME_ERROR } from './secretAppType';
import axios from 'axios';


const API_URL = "http://127.0.0.1:8000/"

export const addName = (names) => (dispatch) => {
    return axios.post(API_URL + "viewset/unpickedName/", {
        
        names
    })
        .then((response) => {
            localStorage.getItem("token")
            if (response.data.token) {
                dispatch({
                    type: ADD_NAME,
                    payload: response.data,
                });
            }
        }).catch((error) => {
            dispatch({
                type: ADD_NAME_ERROR,
            })
        })
};


export const pickedName = (name) => (dispatch) => {
    axios.post(API_URL + "viewset/unpickedName/", {
        name
    })
        .then((response) => {
            if (response.state.name) {
                dispatch({
                    type: PICKED_NAME,
                    payload: response.data,
                });
            }
        }).catch((error) => {
            dispatch({
                type: PICKED_NAME_ERROR,
            })
        })
};