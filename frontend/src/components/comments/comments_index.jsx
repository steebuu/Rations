import React from 'react';
import CommentIndexItemContainer from './comments_index_item_container';

export default class CommentsIndex extends React.Component {

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
                    <CommentIndexItemContainer comment={comment} key={i} />
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
