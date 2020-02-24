import React from 'react';
import { withRouter } from 'react-router-dom';
import './session.css';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user)
    }

    // renderErrors() {
    //     return (
    //         <ul className="session-errors-ul">
    //             {Object.keys(this.state.errors).map((error, i) => (
    //                 <li key={`error-${i}`} className="session-error-li">
    //                     {this.state.errors[error]}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
      let emailErrors = [];
      let passwordErrors = [];
      let passwordConfirmErrors = [];
      let usernameErrors = [];
      if (Object.keys(this.state.errors).length > 0) {
        Object.keys(this.state.errors).map((error, i) => {
          if (error === "email") {
            emailErrors.push(<li key={`error-${i}`} className="session-error-li">{this.state.errors[error]}</li>)
          }
          else if (error === "password") {
            passwordErrors.push(<li key={`error-${i}`} className="session-error-li">{this.state.errors[error]}</li>)
          }
          else if (error === "password2") {
            passwordConfirmErrors.push(<li key={`error-${i}`} className="session-error-li">{this.state.errors[error]}</li>)
          }
          else if (error === "username") {
            usernameErrors.push(<li key={`error-${i}`} className="session-error-li">{this.state.errors[error]}</li>)
          }
        })
      }
        return (
          <div className="signup-form-container">
            <h2 className="signup-header">Sign Up </h2>
            <form onSubmit={this.handleSubmit} className="signup-form">
              {/* {this.renderErrors()} */}
             
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
                 {emailErrors}
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  placeholder="Username"
                />
                {usernameErrors}
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
                {passwordErrors}
                <input
                  type="password"
                  value={this.state.password2}
                  onChange={this.update("password2")}
                  placeholder="Confirm Password"
                />
                {passwordConfirmErrors}
                <input type="submit" value="Submit" id="signup-form-submit" />
            </form>
          </div>
        );
    }
}

export default withRouter(SignupForm);