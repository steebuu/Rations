import { combineReducers } from 'redux';

// import SessionErrorsReducer from './session_errors_reducer';
import APIRecipesReducer from './api_recipes_reducer';
import UserRecipesReducer from './user_recipes_reducer';

export default combineReducers({
    apiRecipes: APIRecipesReducer,
    userRecipes: UserRecipesReducer 
});