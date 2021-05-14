import { combineReducers } from 'redux';
import names from './secretApp/names';
import auth from './secretApp/auth';
import messages from './secretApp/messages';

const rootReducer = combineReducers({
    names,
    auth,
    messages
})

export default rootReducer