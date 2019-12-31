import { fetchRandomRecipes } from '../../actions/recipe_actions';
import { connect } from 'react-redux';
import RecipeIndex from './recipe_index';

const msp = (state) => {
    return {
        recipes: Object.values(state.entities.recipes)
    }
};

const mdp = (dispatch) => {
    return {
        fetchRandomRecipes: () => dispatch(fetchRandomRecipes())
    }
};

export default connect(msp, mdp)(RecipeIndex);