import { REGISTER_VALIDATED, REGISTER_INVALIDATED, LOGIN_VALIDATED, LOGIN_INVALIDATED, LOGOUT, ADD_NAME } from './secretAppType';

const user = localStorage.getItem("token") 

const initialState = user ? { isLogged: true, user } :
    {isLogged: false, user: null};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_VALIDATED:
            return{
                ...state,
                isLogged: false,
                success: true,
            };
        case REGISTER_INVALIDATED:
            return{
                ...state,
                isLogged: false,
                success: false,
            };
        case LOGIN_VALIDATED:
            return{
                ...state,
                isLogged: true,
                user: payload,
            };
        case LOGIN_INVALIDATED:
            return{
                ...state,
                isLogged: false,
                user: null,
            };
        case LOGOUT:
            return{
                ...state,
            isLogged: false,
            user: null,
        };
        default:
            return state;
    }
}