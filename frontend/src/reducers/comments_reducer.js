import {
    RECEIVE_COMMENTS,
    CREATE_COMMENT,
    REMOVE_COMMENT,
    UPDATE_COMMENT
} from '../actions/comment_actions';

const CommentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return state;
        case CREATE_COMMENT:
            return state;
        case REMOVE_COMMENT:
            return state;
        case UPDATE_COMMENT:
            return state;
        default:
            return state;
    }
};

export default CommentsReducer;