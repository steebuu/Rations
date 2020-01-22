import React, { Component } from 'react';

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
        debugger;
        let userLikesLi = null;
        if (Object.keys(userLikes).length > 0){
            userLikesLi = userLikes.data.map((like, i) => {
                debugger;
                return (<li key={i}>{like.title}</li>)
            });
        }
        return (
            <div>
                <ul>{userLikesLi}</ul>
            </div>
        )


    }
}