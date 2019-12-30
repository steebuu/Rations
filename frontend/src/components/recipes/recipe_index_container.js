import { fetchRecipes } from '../../actions/recipe_actions';
const msp = (state) => {

};

const mdp = (dispatch) => {
    fetchRecipes: () => dispatch(fetchRecipes());
};