import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions/recipe_actions';
import Searchbar from './searchbar';
import {withRouter} from 'react-router-dom';

// const msp = state => {
    
// }

const mdp = dispatch => {
    return {
        fetchRecipes: (filters) => dispatch(fetchRecipes(filters)) 
    };
}

export default withRouter(connect(null, mdp)(Searchbar));