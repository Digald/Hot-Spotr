import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import profile from './profile';

const rootReducer = combineReducers({ profile, routing: routerReducer });

export default rootReducer;
