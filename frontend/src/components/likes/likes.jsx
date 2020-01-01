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
        const {user, recipeId, likeRecipe, unlikeRecipe, fetchLikes} = this.props;
        
        const likers = fetchLikes(recipeId);
        //iterate over likers
        //liker if liker[user_id] = user.id
        if (state.likes[user.id]{
            unlikeRecipe();
        } else {
            likeRecipe();
        }
        
        fetchLikes(); 
    }

    render() {
        return (
            <div>
             <button onClick={this.handleLike}><i class="far fa-thumbs-up"></i></button>
             <div></div>
            </div>
        )
    }
}
