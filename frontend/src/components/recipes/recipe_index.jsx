//a list of recipe index items scraped from api and database

import React, { Component } from 'react'
import RecipeIndexItem from './recipe_index_item';

export default class RecipeIndex extends Component {
    // constructor(props){
    //     super(props)
    // }

    componentDidMount(){
        debugger;
        this.props.fetchRandomRecipes(1);
    }

    render() {
        const {recipes} = this.props;
        if (!recipes){
            return null;
        }
        const recipeLis = Object.values(recipes).map(recipe => {
            return <RecipeIndexItem recipe={recipe} key={recipe.id}/>
        })
        return <div className="recipe-index">{recipeLis}</div>;
    }
}
