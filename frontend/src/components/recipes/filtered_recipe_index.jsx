import React, { Component } from 'react';
import RecipeIndexItem from './recipe_index_item';

export default class FilteredRecipeIndex extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        const { recipes } = this.props;
        if (!recipes) {
            return null;
        }
        const recipeLis = Object.values(recipes).map(recipe => {
            return <RecipeIndexItem recipe={recipe} key={recipe.id} />
        })
        return (
            <div>
                {recipeLis}
            </div>
        )
    }
}
