// import { NAME_LIST_SUCESS, NAME_LIST_ERROR, LOADING_NAME } from './secretAppType';
// import axios from 'axios';
// import { useState } from 'react';

// const token = localStorage.getItem("token");
// const API_URL = "http://127.0.0.1:8000/"


// export const getNameList = (name) => async dispatch => {
//     const [name, setName] = useState("")

//     return axios.get(API_URL + "viewset/unpickedName", token, {
//         names
//     })
//         .then((response) => {
//             if (response.data.names) {
//                 dispatch(setName(response.data.names))
//                 ({
//                     type: NAME_LIST_SUCESS,
//                     payload: response.data
//                 });
//             }
//         }).catch((error) => {
//             dispatch({
//                 type: NAME_LIST_ERROR,
//             })
//         })
// };
