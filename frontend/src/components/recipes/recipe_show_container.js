import { connect } from 'react-redux';
import RecipeShow from './recipe_show';
import {withRouter} from 'react-router-dom';
import { fetchSingleRecipe } from '../../actions/recipe_actions';

const msp = (state, ownProps) => {
    return {
        recipe: state.entities.recipes[ownProps.match.params.recipeId],
        recipeId: ownProps.match.params.recipeId,
        user: state.session.user
    }
};

const mdp = (dispatch) => {
    return {
        fetchRecipe: (recipeId) => dispatch(fetchSingleRecipe(recipeId))
    }
};

export default withRouter(connect(msp, mdp)(RecipeShow));