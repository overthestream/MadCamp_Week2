import { combineReducers, createStore, Reducer, Store } from 'redux';

import select from './select';
import user from './user';
import chat from './chat';

export default rootReducer = combineReducers({
    select,
    user,
    chat,
});

