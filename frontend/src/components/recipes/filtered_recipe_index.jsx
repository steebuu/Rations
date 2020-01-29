import React, { Component } from 'react';
import RecipeIndexItem from './recipe_index_item';
import './recipes.css';

export default class FilteredRecipeIndex extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        const { recipes } = this.props;
        if (!recipes) {
            return null;
        } else if( Object.keys(recipes).length === 0) {
            return <p className="no-results-found">No results found! :(</p>
        }
        const recipeLis = Object.values(recipes).map(recipe => {
            return <RecipeIndexItem recipe={recipe} key={recipe.id} />
        })
        return (
            <div className="filtered-recipe-index">
                <div className="filtered-recipe-index-container">
                    {recipeLis}
                </div>
            </div>
        )
    }
}
