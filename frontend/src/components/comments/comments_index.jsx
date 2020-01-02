import React, { Component } from 'react'

export default class CommentsIndex extends Component {

    componentDidMount(){
        const {recipeId, fetchComments} = this.props;
        fetchComments(recipeId);
    }

    render() {
        const {comments} = this.props;
        let commentLis;
        if (Object.keys(comments).length > 0){
            debugger;
            commentLis = Object.values(comments).map((comment, i) => {
                return(
                    <li key={i}>{comment.body}</li>
                )
            })
        }
        return (
            <div>
                {commentLis}
            </div>
        )
    }
}
