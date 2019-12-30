export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_SINGLE_RECIPE = "RECEIVE_SINGLE_RECIPE";

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