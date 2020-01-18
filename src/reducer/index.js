import { combineReducers } from 'redux';

import app from './app';
import deshboard from './deshboard'
// import authReducer from './authReducer';
// import counterReducer from './counterReducer';

export default combineReducers({
    app: app,
    deshboard:  deshboard
});
