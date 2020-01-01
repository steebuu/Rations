import * as LikeAPIUtil from '../util/like_util';

const RECEIVE_LIKES = "RECEIVE_LIKES";

const receiveLikes = likes => {
    return {
        type: RECEIVE_LIKES,
        likes
    }
}

const fetchLikes = (recipeId) => dispatch => {
    return LikeAPIUtil.fetchLikes(recipeId).then(likes => {
        return dispatch(receiveLikes(likes));
    })
}