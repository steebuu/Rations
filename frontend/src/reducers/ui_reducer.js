import { combineReducers } from 'redux';
import LoadingReducer from './loading_reducer.js';

export default combineReducers({
    loading: LoadingReducer
})