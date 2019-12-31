//a list of recipe index items scraped from api and database

import React, { Component } from 'react'
import RecipeIndexItem from './recipe_index_item';

export default class RecipeIndex extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        fetchRecipes();
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
