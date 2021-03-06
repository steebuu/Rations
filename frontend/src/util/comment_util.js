import axios from 'axios';

export const createComment = ({ userId, recipeId, body, username }) => {
  return axios.post('/api/comments/', { body: body, user: userId, recipe: recipeId, username: username })
}

export const removeComment = id => {
  return axios.delete(`/api/comments/${id}`)
}

export const updateComment = ({body, id}) => {
  return axios.patch(`/api/comments/${id}`, {body: body})
}

export const fetchComments = recipeId => {
  return axios.get(`/api/comments/recipes/${recipeId}`)
}
