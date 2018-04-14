import { createStore, compose } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';

//Import the root reducer
import rootReducer from './reducers/index';

import profile from './reducers/profile';

//Create an object for the default data
const defaultState = {
    profile
};

const store = createStore(rootReducer, defaultState);

// export const history = syncHistoryWithStore(store);

export default store;
