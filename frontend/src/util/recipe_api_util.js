import axios from 'axios';

export const fetchRecipes = () => {
    return axios.get('/api/recipes');

}

export const fetchSingleRecipe = (recipeId) => {
    return axios.get(`/api/recipes/${recipeId}`);
}


