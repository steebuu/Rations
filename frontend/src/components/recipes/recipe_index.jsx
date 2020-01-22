//a list of recipe index items scraped from api and database

import React, { Component } from 'react'
import RecipeIndexItem from './recipe_index_item';

export default class RecipeIndex extends Component {

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

        let component;

        if (loading) {
            component = <div className="background-loader">
                <div className="loader"></div>
                <p className="loading">Loading...</p>
            </div> 
        } else {
            component = <div className="recipe-index-container">
                {recipeLis}
            </div>
        }
        
        return (
            <div className="recipe-index">
                {component}
            </div>
        );
    }
}
