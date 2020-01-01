import React, { Component } from 'react'

export default class Like extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {fetchLikes} = this.props;
        fetchLikes();
    }

    handleLike(e){
        e.preventDefault();
        const {user, recipeId, likeRecipe, unlikeRecipe, fetchLikes, likes} = this.props;
 
        if (likes[user.id]){
            unlikeRecipe(likes[user.id].id); 

        } else {
            const createLike = {
                user: user.id,
                recipeId: recipeId
            };
            
            likeRecipe(createLike);
        }
        
        fetchLikes(); 
    }

    render() {
        const {user, likes} = this.props;
        let heart = <i class="far fa-heart"></i>
        if (user && likes[user.id]){
            heart = <i class="fas fa-heart"></i>
        }

        return (
            <div>
             <button onClick={this.handleLike}>{heart}</button>
            </div>
        )
    }
}
