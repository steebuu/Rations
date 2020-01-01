import * as LikeAPIUtil from '../util/like_util';

const RECEIVE_LIKES = "RECEIVE_LIKES";
const CREATE_LIKE = "CREATE_LIKE";
const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLikes = likes => {
    return {
        type: RECEIVE_LIKES,
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

const fetchLikes = (recipeId) => dispatch => {
    return LikeAPIUtil.fetchLikes(recipeId).then(likes => {
        return dispatch(receiveLikes(likes));
    })
}

const postLike = data => dispatch => {
    return LikeAPIUtil.createLike(data).then(like => {
        return dispatch(receiveSingleLike(like));
    })
}

const deleteLike = likeId => dispatch => {
    return LikeAPIUtil.deleteLike(likeId).then(like => {
        return dispatch(removeLike(like));
    })
}