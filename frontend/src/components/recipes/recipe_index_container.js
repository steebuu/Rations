import { fetchRandomRecipes } from '../../actions/recipe_actions';
import { startLoading } from '../../actions/loading_actions';
import { fetchLikesByUser } from '../../actions/like_actions';
import { connect } from 'react-redux';
import RecipeIndex from './recipe_index';

const msp = (state) => {
    return {
        loading: state.ui.loading,
        recipes: state.entities.recipes,
        userId: state.session.user.id
    }
};

const mdp = (dispatch) => {
    return {
        startLoading: () => dispatch(startLoading()),
        fetchRandomRecipes: (num) => dispatch(fetchRandomRecipes(num)),
        fetchLikesByUser: (userId) => {dispatch(fetchLikesByUser(userId))}
    }
};

export default connect(msp, mdp)(RecipeIndex);