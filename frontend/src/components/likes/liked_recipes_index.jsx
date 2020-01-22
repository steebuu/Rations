import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LikedRecipeIndex extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const { fetchLikesByUser, userId } = this.props;
        fetchLikesByUser(userId);
    }

    render(){
        const { userLikes } = this.props;
        let userLikesLi = null;
        if (userLikes.data){
            userLikesLi = userLikes.data.map((like, i) => {
                return (<Link to={`/recipes/${like.recipe}`} key={i}>{like.title}</Link>)
            });
        }
        return (
            <div>
                <ul>{userLikesLi}</ul>
            </div>
        )


    }
}