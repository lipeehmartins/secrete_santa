import { SEND_MESSAGE, CLEAR_MESSAGE } from './secretAppType';

let msgState = {};

export default function (state = msgState, action) {
    const { type, payload} = action;

    switch (type){
        case SEND_MESSAGE:
            return {message: payload};
        case CLEAR_MESSAGE:
            return {message: ""};
        default:
            return state;
    }
}