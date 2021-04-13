import authReducer from './authReducer';
import projectReducer from './projectReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth authReducer,
    project projectReducer
});

export default rootReducer;