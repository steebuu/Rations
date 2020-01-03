import React, { Component } from 'react'
import CommentIndexItemContainer from './comments_index_item_container';

export default class CommentsIndex extends Component {

    componentDidMount(){
        const {recipeId, fetchComments} = this.props;
        fetchComments(recipeId);
    }

    render() {
        const {comments} = this.props;
        let commentLis;
        if (Object.keys(comments).length > 0){
            commentLis = Object.values(comments).map((comment, i) => {
                return(
                    <CommentIndexItemContainer comment={comment}/>
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
