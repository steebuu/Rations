import axios from 'axios';

export const createLike = ({ userId, recipeId }) => {
  return axios.post('/api/likes/', {user: userId, recipe: recipeId}).then(like => console.log(like));
}

export const removeLike = id => {
  return axios.delete(`/api/likes/${id}`).then(like => console.log(like));
}

export const fetchLikesByRecipe = recipeId => {
  return axios.get(`/api/likes/recipes/${recipeId}`).then(likes => console.log(likes));
}

export const fetchLikesByUser = userId => {
  return axios.get(`/api/likes/users/${userId}`).then(likes => console.log(likes));
}

