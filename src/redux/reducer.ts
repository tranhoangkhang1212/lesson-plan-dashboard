import { combineReducers } from 'redux';

import loginSlice from './slices/login';

const rootReducer = combineReducers({
    login: loginSlice,
});

export default rootReducer;
