//an atomic recipe index item containing light information (e.g image, title, author) about the recipe

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./recipes.css";

export default class RecipeIndexItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {recipe} = this.props;
        return (
            <div className="recipe-index-item-container">
                <Link to={`recipes/${recipe.id}`} className="recipe-index-item">
                    <img src={recipe.image} alt=""/>
                    <p>{recipe.title}</p>
                    <p>{recipe.sourceName}</p>
                </Link>
            </div>
        )
    }
}
