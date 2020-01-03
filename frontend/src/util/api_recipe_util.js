import axios from 'axios';


export const fetchApiRecipes = (filters) => {
  return axios.post('/api/recipes', {filters: filters});
}

export const fetchApiRandomRecipes = (number) => {
  return axios.post('/api/recipes/random', { number: number });
}

export const fetchApiRecipe = (id) => {
  return axios.get(`/api/recipes/${id}`);
}