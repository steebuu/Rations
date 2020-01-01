import { connect } from 'react-redux';
import Like from './likes';
import { fetchLikes, postLike, deleteLike } from '../../actions/like_actions';

const msp = (state, ownProps) => {
    return {
        user: state.session.user,
        recipeId: ownProps.recipeId,
        likes: state.entities.likes
    }
}

const mdp = dispatch => {
    return {
        likeRecipe: (data) => dispatch(postLike(data)),
        unlikeRecipe: (id) => dispatch(deleteLike(id)),
        fetchLikes: recipeId => dispatch(fetchLikes(recipeId))
    }
}

export default connect(msp, mdp)(Like);