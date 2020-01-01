import React, { Component } from 'react'

export default class RecipeShow extends Component {
    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        const {fetchRecipe, recipeId} = this.props;
        
        fetchRecipe(recipeId)
    }

    // fetchRecipe(recipeId){
    //     this.props.fetchRecipe(recipeId);
    // }

    render() {
        const {recipe, recipeId} = this.props;
        if (!recipe) return null;
        let instructionLi;
        if (recipe && recipe.analyzedInstructions){
            instructionLi = recipe.analyzedInstructions[0].steps.map((instruction, i) => {
                debugger;
                return(
                    <li key={i}>{instruction.step}</li>
                )
            })
        }
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
