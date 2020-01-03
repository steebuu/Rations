import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { fetchComments, createComment, updateComment, removeComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
    return {
        user: state.session.user,
        recipeId: ownProps.recipeId,
        comments: state.entities.comments
    }
}

const mdp = dispatch => {
    return {
       fetchComments: recipeId => dispatch(fetchComments(recipeId)),
       createComment: data => dispatch(createComment(data)),
       updateComment: data => dispatch(updateComment(data)),
       removeComment: commentId => dispatch(removeComment(commentId))
    }
}

export default connect(msp, mdp)(CommentsIndex);