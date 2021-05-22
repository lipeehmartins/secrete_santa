import { ADD_NAME } from './secretAppType';


export const name = (names) => ({
        type: ADD_NAME,
        payload: {names},
});

