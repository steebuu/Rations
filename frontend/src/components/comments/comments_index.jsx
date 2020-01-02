import React, { Component } from 'react'

export default class CommentsIndex extends Component {
    render() {
        const {comments} = this.props;
        let commentLis;
        if (Object.keys(comments).length > 0){
            commentLis = comments.map((comment, i) => {
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
