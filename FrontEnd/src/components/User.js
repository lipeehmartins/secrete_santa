import axios from 'axios';
import authHeader from './authHeader';

const API_URL = "http://127.0.0.1:8000/viewset/user/";

const getUserContent = () => {
    return axios.get(API_URL + 'user', { headers: authHeader() });
};

const getAdminContent = () => {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
};

export default {
    getUserContent,
    getAdminContent,
};