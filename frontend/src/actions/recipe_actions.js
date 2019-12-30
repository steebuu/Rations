export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_SINGLE_RECIPE = "RECEIVE_SINGLE_RECIPE";
import * as RecipeAPIUtil from '../util/recipe_api_util';

export const receiveRecipes = recipes => {
    return {
        type: RECEIVE_RECIPES,
        recipes
    }
}

export const receiveSingleRecipe = recipe => {
    return {
        type: RECEIVE_SINGLE_RECIPE,
        recipe
    }
}

export const fetchRecipes = () => dispatch => {
    return RecipeAPIUtil.fetchRecipes().then(recipes => {
        return dispatch(receiveRecipes(recipes));
    });
};

export const fetchSingleRecipe = (recipeId) => dispatch => {
    return RecipeAPIUtil.fetchSingleRecipe(recipeId).then(recipe => {
        return dispatch(receiveSingleRecipe(recipe));
    });
};

// export const signup = user => dispatch => (
//     APIUtil.signup(user).then(() => (
//         dispatch(receiveUserSignIn())
//     ), err => (
//         dispatch(receiveErrors(err.response.data))
//     ))
// );