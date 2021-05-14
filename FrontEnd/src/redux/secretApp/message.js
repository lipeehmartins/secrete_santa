import { SEND_MESSAGE, CLEAR_MESSAGE } from './secretAppType';

export const sendMessage = (message) => ({
    type: SEND_MESSAGE,
    payload: message,
});

export const clearMessage = () => ({
    type: CLEAR_MESSAGE
});