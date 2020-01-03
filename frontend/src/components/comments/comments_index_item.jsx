import React from 'react';

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
            component = <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.body} onChange={this.update("body")}/>
                            <button>Save Changes</button>
                        </form>      
        } else {
            component = <p>{this.state.body}</p>
        }

        let authButtons;

        if (currentUser && currentUser.id === comment.user) {
            authButtons = <div>
                            <button onClick={this.handleEdit}>Edit</button>
                            <button onClick={this.handleDelete}>Delete</button>
                          </div>
        }

        return (
            <div>
                <span>{comment.username}</span>
                {component}
                {authButtons}
            </div>
        )
    }
}
