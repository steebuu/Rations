import React, { Component } from 'react';
import LikeContainer from '../likes/likes_container';
import CommentsIndexContainer from '../comments/comments_index_container';
import CommentsFormContainer from '../comments/comments_form_container';
import './recipes.css';

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
        } else if (recipe && recipe.analyzedInstructions) {
            instructionLi = <span> No instructions provided - use your imagination :)</span>
        }

        if (recipe && recipe.extendedIngredients) {
            ingredientsLi = recipe.extendedIngredients.map((ingredient, i) => {
                return (
                    <li key={i}>{ingredient.original}</li>
                )
            })
        }

        if (user && Object.keys(user).length > 0) {
            commentForm = <CommentsFormContainer recipeId={recipeId} />
        }

        const defaultImage = "https://spoonacular.com/recipeImages/496003-556x370.jpg"

        if (!recipe.image) {
            recipe.image = defaultImage
        }
        
        return (
            <div>
                <div className="recipe-show-container">
                    <h2>{recipe.title}</h2>
                    <p className="recipe-show-sourceName">{recipe.sourceName}</p>
                    <div className="recipe-show-content">
                        <img src={recipe.image} alt="" />
                        <LikeContainer recipeId={recipeId}/>
                        <h3 className="ingredients-header">Ingredients</h3>
                        <ul className="ingredients-list">{ingredientsLi}</ul>
                        <h3 className="directions-header">Directions</h3>
                        <ol className="directions-list">{instructionLi}</ol>
                    </div>
                </div>
                <div className="comments-container">
                    <h3 className="comments-header">Comments</h3>
                    <CommentsIndexContainer recipeId={recipeId}/>
                    {commentForm}
                </div>
            </div>
        )
    }
}


