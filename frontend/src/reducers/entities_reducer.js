import { combineReducers } from 'redux';

import RecipesReducer from './recipes_reducer';

export default combineReducers({
    recipes: RecipesReducer,
});