import { ADD_NAME } from './secretAppType';
import name from './name';

const names = (state = [], action) => {
    switch (action.type) {
        case ADD_NAME:
            return [
                ...state,
                name(undefined, action)
            ];
        default:
            return state;
    };
};

export default names;