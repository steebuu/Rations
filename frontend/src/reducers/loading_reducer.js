import {
    RECEIVE_RECIPES,
    RECEIVE_SINGLE_RECIPE,
    RECEIVE_RANDOM_RECIPES
} from '../actions/recipe_actions';

import {
    START_LOADING
} from '../actions/loading_actions';

const LoadingReducer = ( state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case START_LOADING:
            return { loading: true };
        case RECEIVE_RANDOM_RECIPES:
            return { loading: false };
        case RECEIVE_RECIPES:
            return { loading: false };
        case RECEIVE_SINGLE_RECIPE:
            return { loading: false };
        default:
            return state;
    }
}

export default LoadingReducer;