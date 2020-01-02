import axios from 'axios';
import keys from '../config/keys_prod';


export const fetchApiRecipes = (filters) => {
  console.log(keys)
  const ingredientsString = filters.ingredients.map(ingredient => ingredient + '%2C');
  const baseUrl = `https://api.spoonacular.com/recipes/findByIngredients?number=${filters.number}&ranking=2&ingredients=`
  const advancedUrl= baseUrl + ingredientsString;
  const perfectUrl = advancedUrl + `&apiKey=${keys.recipeKey}`
  return axios.get(perfectUrl)
}

export const fetchApiRandomRecipes = (number) => {
  const baseUrl = `https://api.spoonacular.com/recipes/random?number=${number}`
  const perfectUrl = baseUrl + `&apiKey=${keys.recipeKey}`
  return axios.get(perfectUrl)
}

export const fetchApiRecipe = (id) => {
  const baseUrl = `https://api.spoonacular.com/recipes/${id}/information?`
  const perfectUrl = baseUrl + `&apiKey=${keys.recipeKey}`
  return axios.get(perfectUrl)
}