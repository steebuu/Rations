//a list of recipe index items scraped from api and database

import React, { Component } from 'react'
import RecipeIndexItem from './recipe_index_item';

export default class RecipeIndex extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchRandomRecipes();
    }

    render() {
        const {recipes} = this.props;
        const recipeLis = recipes.map(recipe => {
            return <RecipeIndexItem recipe={recipe}/>
        })
        return (
            <div>
                {recipeLis}
            </div>
        )
    }
}
