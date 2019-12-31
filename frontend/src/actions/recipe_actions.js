import * as RecipeAPIUtil from '../util/api_recipe_util';

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_SINGLE_RECIPE = "RECEIVE_SINGLE_RECIPE";

export const receiveRecipes = recipes => {
    debugger;
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

export const fetchRecipes = (filters) => dispatch => {
    return RecipeAPIUtil.fetchApiRecipes(filters).then(recipes => {
        return dispatch(receiveRecipes(recipes));
    });
};

export const fetchSingleRecipe = (recipeId) => dispatch => {
    return RecipeAPIUtil.fetchApiRecipe(recipeId).then(recipe => {
        return dispatch(receiveSingleRecipe(recipe));
    });
};

export const fetchRandomRecipes = (number) => dispatch => {
    debugger;
    return RecipeAPIUtil.fetchApiRandomRecipes(number).then(recipes => {
        debugger;
        return dispatch(receiveRecipes(recipes));
    })
}

// export const signup = user => dispatch => (
//     APIUtil.signup(user).then(() => (
//         dispatch(receiveUserSignIn())
//     ), err => (
//         dispatch(receiveErrors(err.response.data))
//     ))
// );