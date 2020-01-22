import { fetchRandomRecipes } from '../../actions/recipe_actions';
import { startLoading } from '../../actions/loading_actions';
import { connect } from 'react-redux';
import RecipeIndex from './recipe_index';

const msp = (state) => {
    return {
        // recipes: Object.values(state.entities.recipes)
        recipes: state.entities.recipes
    }
};

const mdp = (dispatch) => {
    return {
        startLoading: () => dispatch(startLoading()),
        fetchRandomRecipes: (num) => dispatch(fetchRandomRecipes(num))
    }
};

export default connect(msp, mdp)(RecipeIndex);