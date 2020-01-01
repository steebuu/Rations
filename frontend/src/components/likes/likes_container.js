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
        likeRecipe: () => dispatch(postLike()),
        unlikeRecipe: () => dispatch(deleteLike()),
        fetchLikes: () => dispatch(fetchLikes())
    }
}

export default connect(msp, mdp)(Like);