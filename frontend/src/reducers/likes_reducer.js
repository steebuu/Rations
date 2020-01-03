import { RECEIVE_LIKES, REMOVE_LIKE, CREATE_LIKE } from '../actions/like_actions';

const LikesReducer = (state = {}, action) => {
    let newState;
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_LIKES:
            newState = {};
            if(Array.isArray(action.likes.data)) {
                action.likes.data.forEach(like => {
                    newState[like.user] = like
                })
            } else {
                return state;
            }
            return newState;
        case REMOVE_LIKE:
            newState = Object.assign({}, state);
            delete newState[action.like.data.user];
            return newState;
        case CREATE_LIKE:
            return Object.assign({}, state, {[action.like.data.user]: action.like.data});
        default:
            return state;
    }
}; 

export default LikesReducer;
