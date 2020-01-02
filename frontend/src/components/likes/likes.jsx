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
        let heart = <i class="far fa-heart"></i>
        if (user && likes[user.id]){
            heart = <i class="fas fa-heart"></i>
        }

        return (
            <div>
                <span>{Object.keys(likes).length + "like(s)"}</span>
                <button onClick={this.handleLike}>{heart}</button>
            </div>
        )
    }
}
