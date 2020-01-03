import React, { Component } from 'react'

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
        let heart;
        let button;

        if (user && likes[user.id]){
            heart = <i className="fas fa-heart"></i>
            button = <button onClick={this.handleLike}>{heart}</button>
        } else if (user && Object.keys(user).length > 0) {
            heart = <i className="far fa-heart"></i>
            button = <button onClick={this.handleLike}>{heart}</button>
        }

        return (
            <div>
                <span>{Object.keys(likes).length + "like(s)"}</span>
                {button}
            </div>
        )
    }
}
