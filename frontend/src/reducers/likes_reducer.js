import { RECEIVE_LIKES, REMOVE_LIKE } from '../actions/like_actions';

const LikesReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case RECEIVE_LIKES:
            debugger;
            newState = {};
            action.likes.forEach(like => {
                newState[like.user] = like
            })
            return newState;
        case REMOVE_LIKE:
            debugger;
            newState = Object.assign({}, state);
            delete newState[action.like[like.user]];
            return newState;
        default:
            return state;
    }

};

export default LikesReducer;
