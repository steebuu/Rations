import { connect } from 'react-redux';

import FilteredRecipeIndex from './filtered_recipe_index';

const mapStateToProps = state => {
    return {
        recipes: state.entities.recipes
    }
}

export default connect(mapStateToProps, null)(FilteredRecipeIndex);