import axios from 'axios';

export const createLike = ({ userId, recipeId }) => {
  return axios.post('/api/likes/', {user: userId, recipe: recipeId}).then(like => console.log(like));
}

export const removeLike = id => {
  return axios.delete(`/api/likes/${id}`).then(like => console.log(like));
}