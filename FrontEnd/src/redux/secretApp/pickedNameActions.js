import { PICKED_NAME } from './secretAppType';


const initialState = [];
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case PICKED_NAME:
            return {
                ...state,
                name: payload
            };
        default:
            return state;
    };
}