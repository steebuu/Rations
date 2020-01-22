import React, { Component } from 'react'
import './likes.css';

export default class Like extends Component {
    constructor(props){
        super(props);
        this.handleLike = this.handleLike.bind(this);
    }

    componentDidMount(){
        const {fetchLikes, recipeId} = this.props;
        fetchLikes(recipeId);
    }

    handleLike(e){
        e.preventDefault();
        const {user, recipeId, likeRecipe, unlikeRecipe, fetchLikes, likes, title} = this.props;
 
        if (likes[user.id]){
            unlikeRecipe(likes[user.id]._id)
        } else {
            const createLike = {
                userId: user.id,
                recipeId: recipeId,
                title: title
            };
            likeRecipe(createLike)
        }
        fetchLikes(recipeId) 
    }

    render() {
        const {user, likes} = this.props;
        let heart;
        let button;

        if (user && likes[user.id]){
                    heart = <i className="fas fa-heart filled-in-heart"></i>
            button = <button onClick={this.handleLike} className="likes-button">{heart}</button>
        } else if (user && Object.keys(user).length > 0) {
                    heart = <i className="far fa-heart outline-heart"></i>
            button = <button onClick={this.handleLike} className="likes-button">{heart}</button>
        }
        
        return (
            <div className="likes-info-container">
                <div className="likes-column">
                    <span className="likes-counter">{Object.keys(likes).length + "like(s)"}</span>
                    {button}
                </div>
            </div>
        )
    }
}


