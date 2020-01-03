import { combineReducers } from 'redux';

import RecipesReducer from './recipes_reducer';
import LikesReducer from './likes_reducer';
import CommentsReducer from './comments_reducer';

export default combineReducers({
    recipes: RecipesReducer,
    likes: LikesReducer,
    comments: CommentsReducer
});