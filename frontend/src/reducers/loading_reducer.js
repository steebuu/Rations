import {
    RECEIVE_RECIPES,
    RECEIVE_SINGLE_RECIPE,
    RECEIVE_RANDOM_RECIPES
} from '../actions/recipe_actions';

const LoadingReducer = ( state = {}, action) => {
    Object.freeze(state);
    let loading = true;
    switch (action.type) {
        case RECEIVE_RANDOM_RECIPES:
            return false;
        case RECEIVE_RECIPES:
            return false;
        case RECEIVE_SINGLE_RECIPE:
            return false;
        default:
            return state;
    }
}

export default LoadingReducer;