import { fetchRecipes } from '../../actions/recipe_actions';
import { connect } from 'react-redux';
import RecipeIndex from './recipe_index';

// const msp = (state) => {

// };

const mdp = (dispatch) => {
    return {
        fetchRecipes: () => dispatch(fetchRecipes())
    }
};

export default connect(null, mdp)(RecipeIndex);