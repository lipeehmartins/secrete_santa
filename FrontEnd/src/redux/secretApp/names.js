import { ADD_NAME, REMOVED_NAME } from './secretAppType';


const initialState = [];
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_NAME:
            return {
                ...state,
                names: payload
            };
        case REMOVED_NAME:
            return {
                ...state,
                names: payload
            };
        default:
            return state;
    };
}
