import {NAME_LIST_SUCESS, NAME_LIST_ERROR, LOADING_NAME } from './secretAppType';

import axios from 'axios';

export const getNameList = () => async dispatch => {
    try {
        dispatch({
            type: LOADING_NAME
        });

        const response = await axios.get(url=`http://127.0.0.1:8000/viewset/unpickedName/`)

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