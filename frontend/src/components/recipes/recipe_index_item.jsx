//an atomic recipe index item containing light information (e.g image, title, author) about the recipe

import React, { Component } from 'react'

export default class RecipeIndexItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {recipe} = this.props;
        return (
            <div>
                <img src={recipe.image} alt=""/>
                <p>{recipe.title}</p>
                <p>{recipe.sourceName}</p>
            </div>
        )
    }
}
