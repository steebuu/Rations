import React, { Component } from 'react'

export default class CommentsForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            body: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const {user, recipeId, createComment} = this.props;
        const {body} = this.state;
        const data = {user: user.id, recipe: recipeId, body: body}

        createComment(data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add a comment..." id=""/>
                <button>Submit Comment</button>
            </form>
        )
    }
}
