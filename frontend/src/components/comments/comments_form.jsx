import React, { Component } from 'react'

export default class CommentsForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            body: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const {user, recipeId, createComment} = this.props;
        const {body} = this.state;
        const data = {userId: user.id, recipeId: recipeId, body: body}

        createComment(data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add a comment..." onChange={this.update("body")}/>
                <button>Submit Comment</button>
            </form>
        )
    }
}
