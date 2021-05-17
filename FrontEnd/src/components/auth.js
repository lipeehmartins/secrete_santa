// import axios from 'axios';

// const API_URL = "http://127.0.0.1:8000/"

// const register = (username, firstName, lastName, email, password) => {
//     return axios.post(API_URL + "viewset/user/", {
//         username,
//         firstName,
//         lastName,
//         email,
//         password,
//     });
// };

// const login = (username,password) => {
//     return axios.post(API_URL + 'login/', {
//         username,
//         password
//     })
//     .then((response) => {
//         if (response.data.token) {
//             localStorage.setItem("user", response.data.token);
//         }
//     });
// };

// const logout = () => {
//     localStorage.removeItem("token");
// };

// export default {register, login, logout};