import { ADD_NAME } from './secretAppType';


const initialState = { names: "" }
const names = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NAME: {
            const { names } = action.payload
            return { names };
        }
        default:
            return state;
    };
};

export default names;