import axios from 'axios';


export const createLike = ({ userId, recipeId, title }) => {
  return axios.post('/api/likes/', {user: userId, recipe: recipeId, title: title});
}

export const removeLike = id => {
  return axios.delete(`/api/likes/${id}`);
}

export const fetchLikesByRecipe = recipeId => {
  return axios.get(`/api/likes/recipes/${recipeId}`);
}

export const fetchLikesByUser = userId => {
  return axios.get(`/api/likes/users/${userId}`);
}

