import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';
import SearchbarContainer from './searchbar_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <button className="logout-button" onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to={'/login'} className="login-button">Login</Link>
                    <Link to={'/signup'} className="signup-button">Signup</Link>
                </div>
            );
        }
    }

    render() {
        return (
          <div className="navbar">
            <Link to={'/'} className="logo">Rations</Link>
                <SearchbarContainer />
                {this.getLinks()}
          </div>
        );
    }
}

export default NavBar;