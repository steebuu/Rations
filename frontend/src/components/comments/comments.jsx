import React, { Component } from 'react'

export default class Comments extends Component {
    render() {
        const {comments} = this.props;
        if (Object.keys(comments).length > 0){
            const {commentLis} = comments.map((comment, i) => {
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
