import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions/recipe_actions';
import Searchbar from './searchbar';

// const msp = state => {
    
// }

const mdp = dispatch => {
    return {
        fetchRecipes: (filters) => dispatch(fetchRecipes(filters)) 
    };
}

export default connect(null, mdp)(Searchbar);