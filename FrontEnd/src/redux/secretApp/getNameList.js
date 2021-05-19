import { NAME_LIST_SUCESS, NAME_LIST_ERROR, LOADING_NAME } from './secretAppType';
import axios from 'axios';

const token = localStorage.getItem("token");
const API_URL = "http://127.0.0.1:8000/"

export const getNameList = (names) => async dispatch => {

    return axios.get(API_URL + "viewset/unpickedName", token, {
        names
    })
        .then((response) => {
            if (response.data.names) {
                dispatch({
                    type: NAME_LIST_SUCESS,
                    payload: response.data.names
                });
            }
        }).catch((error) => {
            dispatch({
                type: NAME_LIST_ERROR,
            })
        })
};
