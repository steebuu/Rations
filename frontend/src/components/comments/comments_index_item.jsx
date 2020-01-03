import React from 'react';
import './comments.css';
export default class CommentsIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: this.props.comment.body,
            edit: false
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const {updateComment, comment} = this.props;

        updateComment({id: comment._id, body: this.state.body})
        this.setState({edit: false})
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleEdit(e){
        e.preventDefault();
        this.setState({edit: true})
    }

    handleDelete(e){
        e.preventDefault();
        const {comment, removeComment} = this.props;

        removeComment(comment._id);
    }

    render() {
        const {comment, currentUser} = this.props;
        let component;

        if (this.state.edit) {
            component = <form className="message-edit-form" onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.body} onChange={this.update("body")}/>
                            <button className="save-changes">Save</button>
                        </form>      
        } else {
            component = <p>{this.state.body}</p>
        }

        let authButtons;

        if (currentUser && currentUser.id === comment.user) {
            authButtons = <div className="auth-buttons">
                            <button className="auth-edit" onClick={this.handleEdit}>Edit</button>
                            <button className="auth-delete" onClick={this.handleDelete}>Delete</button>
                          </div>
        }

        return (
            <div className="message-container">
                <span className="message-username">{comment.username}:</span>
                <div className="message-split">
                    {component}
                </div>
                {authButtons}
            </div>
        )
    }
}
