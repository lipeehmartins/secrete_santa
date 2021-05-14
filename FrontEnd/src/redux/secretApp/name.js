import { ADD_NAME } from './secretAppType';


const name = (state, action) => {
    switch (action.type) {
        case ADD_NAME:
            return {
                id: action.id,
                name: action.name,
            };
        default:
            return state;
    }
};

export default name;