import {
    RECEIVE_COMMENTS,
    REMOVE_COMMENT,
} from '../actions/comment_actions';

const CommentsReducer = (state = {}, action) => {
    let newState;
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            newState = {};
            action.comments.forEach(comment => {
                newState[comment.user] = comment
            })
            return newState;
        case REMOVE_COMMENT:
            newState = Object.assign({}, state);
            delete newState[action.comment.user];
            return newState;
        default:
            return state;
    }
};

export default CommentsReducer;