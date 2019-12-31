import React, { Component } from 'react'

export default class RecipeShow extends Component {
    constructor(props){
        super(props)
        
    }

    fetchRecipe(recipeId){
        this.props.fetchRecipe(recipeId);
    }

    render() {
        const {recipe, recipeId} = this.props;
        if (!recipe) {
            fetchRecipe(recipeId)
        }
        const instructionLi = recipe.analyzedInstructions.map((step, i) => {
            return(
                <li key={i}>{step}</li>
            )
        })
        return (
            <div>
                <img src={recipe.image} alt="" />
                <p>{recipe.title}</p>
                <p>{recipe.sourceName}</p>
                <ul>{instructionLi}</ul>
            </div>
        )
    }
}
