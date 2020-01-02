import {
    RECEIVE_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT,
} from '../actions/comment_actions';

const CommentsReducer = (state = {}, action) => {
    let newState;
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            newState = {};
            debugger;
            action.comments.data.forEach(comment => {
                newState[comment._id] = comment
            })
            return newState;
        case REMOVE_COMMENT:
            newState = Object.assign({}, state);
            delete newState[action.comment.data._id];
            return newState;
        case RECEIVE_COMMENT:
            return Object.assign({}, state, {[action.comment.data._id]: action.comment.data})
        default:
            return state;
    }
};

export default CommentsReducer;