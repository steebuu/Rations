import * as LikeAPIUtil from '../util/like_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const CREATE_LIKE = "CREATE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_USER_LIKES = "RECEIVE_USER_LIKES";

const receiveLikes = likes => {
    return {
        type: RECEIVE_LIKES,
        likes
    }
}

const receiveUserLikes = likes => {
    return {
        type: RECEIVE_USER_LIKES,
        likes
    }
}

const receiveSingleLike = like => {
    return {
        type: CREATE_LIKE,
        like
    }
}

const removeLike = like => {
    return {
        type: REMOVE_LIKE,
        like
    }
}

export const fetchLikes = (recipeId) => dispatch => {
    return LikeAPIUtil.fetchLikesByRecipe(recipeId).then(likes => {
        return dispatch(receiveLikes(likes));
    })
}

export const fetchLikesByUser = userId => dispatch => {
    return LikeAPIUtil.fetchLikesByUser(userId).then(likes => {
        return dispatch(receiveUserLikes(likes))
    })
}

export const postLike = data => dispatch => {
    return LikeAPIUtil.createLike(data).then(like => {
        return dispatch(receiveSingleLike(like));
    })
}

export const deleteLike = likeId => dispatch => {
    return LikeAPIUtil.removeLike(likeId)
    .then(like => {
        return dispatch(removeLike(like));
    })
}