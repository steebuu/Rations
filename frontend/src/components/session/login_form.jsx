import React from 'react';
import './session.css';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul className="session-errors-ul">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`} className="session-error-li">
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    loginDemo() {
        let demo = {
            email: "shree@e.mail",
            password: "password"
        };

        this.props.login(demo)
        this.props.history.goBack();
    }

    render() {
        return (
          <div className="login-form-container">
            <h2 className="login-header">Login</h2>
            <form onSubmit={this.handleSubmit} className="login-form">
              {this.renderErrors()}
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <input type="submit" value="Submit" id="login-form-submit" />
              <button onClick={this.loginDemo} className="demo-login-button">Demo Login</button>
            </form>
          </div>
        );
    }
}

export default withRouter(LoginForm);