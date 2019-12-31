import {
    RECEIVE_RECIPES,
    RECEIVE_SINGLE_RECIPE
} from '../actions/recipe_actions';

const RecipesReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger;
    switch (action.type) {
        case RECEIVE_RECIPES:
            return Object.assign({}, state, action.recipes.data.recipes)
        case RECEIVE_SINGLE_RECIPE:
            return Object.assign({}, state, { [action.recipe.id]: action.recipe });
        default:
            return state;
    }
};

export default RecipesReducer;