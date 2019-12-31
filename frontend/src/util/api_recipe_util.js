import axios from 'axios';
import keys from '../config/keys';


export const fetchApiRecipes = (filters) => {
  const ingredientsString = filters.ingredients.map(ingredient => ingredient + '%2C');
  const baseUrl = "https://api.spoonacular.com/recipes/find" + `ByIngredients?number=${filters.number}&ranking=2&ingredients=`
  const advancedUrl= baseUrl + ingredientsString;
  const perfectUrl = advancedUrl + `&apiKey=${keys.recipeKey}`
  return axios.get(perfectUrl).then(recipes => console.log(recipes));
}

export const fetchApiRandomRecipes = (number) => {
  const baseUrl = "https://api.spoonacular.com/recipes/random" + `?number=${number}`
  const perfectUrl = baseUrl + `&apiKey=${keys.recipeKey}`
  return axios.get(perfectUrl).then(recipes => console.log(recipes));
}

export const fetchApiRecipe = (id) => {
  const baseUrl = "https://api.spoonacular.com/recipes/" + `${id}/information?`
  const perfectUrl = baseUrl + `&apiKey=${keys.recipeKey}`
  return axios.get(perfectUrl).then(recipe => console.log(recipe));
}