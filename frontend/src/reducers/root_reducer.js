// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import EntitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    entities: EntitiesReducer,
    ui: uiReducer
});

export default RootReducer;