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
        const {user, recipeId, likeRecipe, unlikeRecipe, fetchLikes, likes} = this.props;
 
        if (likes[user.id]){
            unlikeRecipe(likes[user.id]._id)
        } else {
            const createLike = {
                userId: user.id,
                recipeId: recipeId
            };
            likeRecipe(createLike)
        }
        fetchLikes(recipeId) 
    }

    render() {
        const {user, likes} = this.props;
        let heart = <i className="far fa-heart outline-heart"></i>
        if (user && likes[user.id]){
            heart = <i className="fas fa-heart filled-in-heart"></i>
        }

        return (
            <div className="likes-info-container">
                <div className="likes-column">
                    <span className="likes-counter">{Object.keys(likes).length + " like(s)"}</span>
                    <button className="likes-button" onClick={this.handleLike}>{heart}</button>
                </div>
            </div>
        )
    }
}
