import React from 'react';
import RecipeIndexContainer from '../recipes/recipe_index_container';

class MainPage extends React.Component {
    
    render() {
        return (
            <div>
                <RecipeIndexContainer />
                <h1>Rations</h1>
                <footer>
                    Copyright &copy; 2019 Gatekeepers
                </footer>
            </div>
        );
    }
}

export default MainPage;