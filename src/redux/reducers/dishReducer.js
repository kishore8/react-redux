import * as types from '../actions/actionTypes';

export default function dishReducer(state = [],action){
    switch(action.type){
        case types.createDish:
            return [...state, {...action.dish}];
        default:
            return state;
    }
}