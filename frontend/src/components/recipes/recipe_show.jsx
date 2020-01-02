import React, { Component } from 'react';
import LikeContainer from '../likes/likes_container';

export default class RecipeShow extends Component {
    // constructor(props){
    //     super(props)
    // }

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
        if (recipe && recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0){
            instructionLi = recipe.analyzedInstructions[0].steps.map((instruction, i) => {
                return(
                    <li key={i}>{instruction.step}</li>
                )
            })
        }
        return (
            <div>
                <img src={recipe.image} alt="" />
                <p>{recipe.title}</p>
                <LikeContainer recipeId={recipeId}/>
                <p>{recipe.sourceName}</p>
                <ul>{instructionLi}</ul>
            </div>
        )
    }
}
