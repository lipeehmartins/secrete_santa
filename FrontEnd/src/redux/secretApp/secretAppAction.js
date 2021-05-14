import { ADD_NAME, LOG_IN, NAME_LIST_SUCESS, NAME_LIST_ERROR, LOADING_NAME } from './secretAppType';
import axios from 'axios';

export const getNameList = () => async dispatch => {
    try {
        dispatch({
            type: LOADING_NAME
        });

        const response = await axios.get(`http://127.0.0.1:8000/viewset/unpickedName/`)

        dispatch({
            type: NAME_LIST_SUCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: NAME_LIST_ERROR,
        })
    }
};
let nextNameId = 0;
export const addName = (name) => {
    return {
        type: ADD_NAME,
        id: nextNameId++,
        name
    };
};

export const log_in = payload => {
    return {
        type: LOG_IN,
        payload,
    }
}