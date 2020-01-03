import React, { Component } from 'react';
import LikeContainer from '../likes/likes_container';
import CommentsIndexContainer from '../comments/comments_index_container';
import CommentsFormContainer from '../comments/comments_form_container';
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
        const {recipe, recipeId, user} = this.props;
        if (!recipe) return null;
        let instructionLi;
        let ingredientsLi;
        let commentForm;

        if (recipe && recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0){
            instructionLi = recipe.analyzedInstructions[0].steps.map((instruction, i) => {
                return(
                    <li key={i}>{instruction.step}</li>
                )
            })
            ingredientsLi = recipe.extendedIngredients.map((ingredient, i) => {
                return(
                    <li key={i}>{ingredient.original}</li>
                )
            })
        }

        if (user && Object.keys(user).length > 0) {
            commentForm = <CommentsFormContainer recipeId={recipeId} />
        }
        return (
            <div>
                <img src={recipe.image} alt="" />
                <p>{recipe.title}</p>
                <LikeContainer recipeId={recipeId}/>
                <p>{recipe.sourceName}</p>
                <span>Ingredients</span>
                <ul>{ingredientsLi}</ul>
                <span>Directions</span>
                <ul>{instructionLi}</ul>
                <span>Comments</span>
                <CommentsIndexContainer recipeId={recipeId}/>
                {commentForm}
            </div>
        )
    }
}
