import axios from 'axios';

export const createLike = ({ userId, recipeId }) => {
  return axios.post('/api/likes/', {user: userId, recipe: recipeId})
}

export const removeLike = id => {
  return axios.delete(`/api/likes/${id}`)
}

<<<<<<< HEAD
export const fetchLikes = recipeId => {
  return axios.get(`/api/likes/recipes/${recipeId}`)
}
=======
export const fetchLikesByRecipe = recipeId => {
  return axios.get(`/api/likes/recipes/${recipeId}`).then(likes => console.log(likes));
}

export const fetchLikesByUser = userId => {
  return axios.get(`/api/likes/users/${userId}`).then(likes => console.log(likes));
}

>>>>>>> d7edec098638bb6089a669a56d18265d8a821bd1
