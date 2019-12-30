import axios from 'axios';
import keys from '../config/keys';


export const fetchApiRecipes = (filters) => {
  return axios.get('https://api.spoonacular.com/recipes/findByIngredients', {data: {ingredients: filters.ingredients, number: filters.number, ranking: 2}})
}