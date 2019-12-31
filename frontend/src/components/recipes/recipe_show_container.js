import { connect } from 'react-redux';
import RecipeShow from './recipe_show';

const msp = (state, ownProps) => {
    return {
        recipe: state.entities.recipes[ownProps.match.params.recipeId],
        recipeId: ownProps.match.params.recipeId
    }
};

const mdp = (dispatch) => {
    return {
        fetchRecipe: (recipeId) => dispatch(fetchRecipes(recipeId))
    }
};

export default connect(msp, mdp)(RecipeShow);