import { combineReducers } from 'redux';

import dishes from'./dishReducer';

const rootReducer = combineReducers({
    dishes
});

export default rootReducer;