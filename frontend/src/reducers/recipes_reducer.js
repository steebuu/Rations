import {
    RECEIVE_RECIPES,
    RECEIVE_SINGLE_RECIPE
} from '../actions/recipe_actions';

const RecipesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RECIPES:
            return action.recipes;
        case RECEIVE_SINGLE_RECIPE:
            return Object.assign({}, state, { [action.recipe.id]: action.recipe });
        default:
            return state;
    }
};

export default RecipesReducer;