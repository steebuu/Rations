import axios from 'axios';
import keys from '../config/keys';


export const fetchApiRecipes = (filters) => {
  return axios.post('/api/recipes', {filters: filters});
}

export const fetchApiRandomRecipes = (number) => {
  debugger
  return axios.post('/api/recipes/random', { number: number });
}

export const fetchApiRecipe = (id) => {
  return axios.get(`/api/recipes/${id}`);
}