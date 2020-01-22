
import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import RecipeShowContainer from './recipes/recipe_show_container';
import FilteredRecipeIndexContainer from './recipes/filtered_recipe_index_container';
import LikedRecipeIndexContainer from './likes/liked_recipes_index_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path ="/recipes/:recipeId" component={RecipeShowContainer}/>
            <Route path="/searchresults" component={FilteredRecipeIndexContainer} />
            <Route path="/favorites" component={LikedRecipeIndexContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;