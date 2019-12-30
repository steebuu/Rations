import {

} from '../actions/recipe_actions';

const UserRecipesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        default:
            return state;
    }
};

export default UserRecipesReducer;