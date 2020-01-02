import { connect } from 'react-redux';
import CommentsIndexItem from './comments_index_item';
import { fetchComments, updateComment, removeComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        recipeId: ownProps.recipeId,
    }
}

const mdp = dispatch => {
    return {
        fetchComments: recipeId => dispatch(fetchComments(recipeId)),
        updateComment: data => dispatch(updateComment(data)),
        removeComment: commentId => dispatch(removeComment(commentId))
    }
}

export default connect(msp, mdp)(CommentsIndexItem);