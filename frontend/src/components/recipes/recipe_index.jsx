//a list of recipe index items scraped from api and database

import React, { Component } from 'react'
import RecipeIndexItem from './recipe_index_item';

export default class RecipeIndex extends Component {
    // constructor(props){
    //     super(props)
    // }

    componentDidMount(){
        const {startLoading, fetchRandomRecipes, recipes} = this.props;
        if (Object.keys(recipes).length === 0){
            startLoading();
            fetchRandomRecipes(21);
        }
    }

    render() {
        const { recipes, loading } = this.props;
        if (!recipes) {
            return null;
        }
        const recipeLis = Object.values(recipes).map(recipe => {
            return <RecipeIndexItem recipe={recipe} key={recipe.id} />
        })

        let test;

        if (loading) {
            test = <p>we are loading</p>
        } else {
            test = recipeLis
        }
        
        return (
            <div className="recipe-index">
                <div className="recipe-index-container">
                    {test}
                </div>
            </div>
        );
    }
}
