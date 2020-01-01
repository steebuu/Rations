import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import { fetchApiRecipes, fetchApiRandomRecipes, fetchApiRecipe } from './util/api_recipe_util';
import { createLike, removeLike, fetchLikesByRecipe, fetchLikesByUser } from './util/like_util';
import { createComment, removeComment, fetchComments, updateComment } from './util/comment_util';

document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (localStorage.jwtToken) {

        setAuthToken(localStorage.jwtToken);

        const decodedUser = jwt_decode(localStorage.jwtToken);

        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;

        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        }
    } else {
        store = configureStore({});
    }
    const root = document.getElementById('root');
    window.fetchApiRecipes = fetchApiRecipes;
    window.fetchApiRandomRecipes = fetchApiRandomRecipes;
    window.fetchApiRecipe = fetchApiRecipe;
    window.createLike = createLike;
    window.removeLike = removeLike;
    window.fetchLikesByRecipe = fetchLikesByRecipe;
    window.fetchLikesByUser = fetchLikesByUser;
    window.createComment = createComment;
    window.removeComment = removeComment;
    window.fetchComments = fetchComments;
    window.updateComment = updateComment;

    ReactDOM.render(<Root store={store} />, root);
});