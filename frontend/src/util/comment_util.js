import axios from 'axios';

export const createComment = ({ userId, recipeId, body }) => {
  return axios.post('/api/comments/', { body: body, user: userId, recipe: recipeId }).then(comment => console.log(comment));
}

export const removeComment = id => {
  return axios.delete(`/api/comments/${id}`).then(comment => console.log(comment));
}

export const updateComment = ({body, id}) => {
  return axios.patch(`/api/comments/${id}`, {body: body}).then(comment => console.log(comment));
}

export const fetchComments = recipeId => {
  return axios.get(`/api/comments/recipes/${recipeId}`).then(comments => console.log(comments));
}
