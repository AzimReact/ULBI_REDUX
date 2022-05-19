import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReduser';

const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools())

