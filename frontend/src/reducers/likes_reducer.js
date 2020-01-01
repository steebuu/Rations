import { RECEIVE_LIKES } from '../actions/like_actions';

const LikesReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_LIKES:
            let newState = {};
            action.likes.forEach(like => {
                newState[like.user.id] = like
            })
            return newState;
        default:
            return state;
    }

};

export default LikesReducer;
