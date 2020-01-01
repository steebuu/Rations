import { RECEIVE_LIKES, REMOVE_LIKE, CREATE_LIKE } from '../actions/like_actions';

const LikesReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case RECEIVE_LIKES:
            debugger;
            newState = {};
            if(typeof action.likes.data === "object") {
                debugger;
                return state;
            }
            action.likes.forEach(like => {
                newState[like.user] = like
            })
            return newState;
        case REMOVE_LIKE:
            debugger;
            newState = Object.assign({}, state);
            delete newState[action.like[action.like.user]];
            return newState;
        case CREATE_LIKE:
            return Object.assign({}, state, {[action.like.data.user]: action.like.data});
        default:
            return state;
    }

}; 

export default LikesReducer;
