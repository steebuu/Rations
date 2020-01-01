import { connect } from 'react-redux';
import Like from './likes';

const msp = (state, ownProps) => {
    return {
        user: state.session.user,
        recipeId: ownProps.recipeId
    }
}

const mdp = dispatch => {
    return {
        likeRecipe: () => dispatch(likeRecipe()),
        unlikeRecipe: () => dispatch(unlikeRecipe()),
        fetchLikes: () => dispatch(fetchLikes())
    }
}

export default connect(msp, mdp)(Like);