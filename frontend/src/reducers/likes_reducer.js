import { RECEIVE_LIKES, REMOVE_LIKE } from '../actions/like_actions';

const LikesReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_LIKES:
            let newState = {};
            action.likes.forEach(like => {
                newState[like.user.id] = like
            })
            return newState;
        case REMOVE_LIKE:
            let newState = Object.assign({}, state);
            delete newState[action.like[user.id]];
            return newState;
        default:
            return state;
    }

};

export default LikesReducer;
