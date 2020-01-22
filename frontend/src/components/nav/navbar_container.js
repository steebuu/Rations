import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {startLoading} from '../../actions/loading_actions';
import {fetchRandomRecipes} from '../../actions/recipe_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        startLoading: () => dispatch(startLoading()),
        fetchRandomRecipes: (number) => dispatch(fetchRandomRecipes(number)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);