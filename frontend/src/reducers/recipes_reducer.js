import {
    RECEIVE_RECIPES,
    RECEIVE_SINGLE_RECIPE,
    RECEIVE_RANDOM_RECIPES
} from '../actions/recipe_actions';

const RecipesReducer = (state = {}, action) => {
     ;
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RANDOM_RECIPES:
            return action.recipes.data.recipes
        case RECEIVE_RECIPES:
             ;
            let newState = {};
            action.recipes.data.forEach(recipe => {
                newState[recipe.id] = recipe
            })
            return newState;
        case RECEIVE_SINGLE_RECIPE:
            return Object.assign({}, state, { [action.recipe.data.id]: action.recipe.data });
        default:
            return state;
    }
};

export default RecipesReducer;