import {

} from '../actions/recipe_actions';

const APIRecipesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        default:
            return state;
    }
};

export default APIRecipesReducer;