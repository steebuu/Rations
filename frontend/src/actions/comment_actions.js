import * as CommentAPIUtil from '../util/comment_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = comments => {
  return {
  type: RECEIVE_COMMENTS,
  comments
  }
}

const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  }
}

const deleteComment = comment => {
    return {
        type: REMOVE_COMMENT,
        comment
    }
}

export const fetchComments = recipeId => dispatch => {
    return CommentAPIUtil.fetchComments(recipeId).then(comments => {
        return dispatch(receiveComments(comments))
    })
}

export const createComment = data => dispatch => {
    return CommentAPIUtil.createComment(data).then(comment => {
        return dispatch(receiveComment(comment))
    })
}

export const updateComment = data => dispatch => {
    return CommentAPIUtil.updateComment(data).then(comment => {
        return dispatch(receiveComment(comment))
    })
}

export const removeComment = commentId => dispatch => {
    return CommentAPIUtil.removeComment(commentId).then(comment => {
        return dispatch(deleteComment(comment))
    })
}