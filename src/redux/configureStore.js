import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant  from 'redux-immutable-state-invariant';

export default function configStore(initialState){
    const composeEnchaners = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        initialState,
        composeEnchaners(applyMiddleware(reduxImmutableStateInvariant())) // warns use to not mutate state
    ); 
}