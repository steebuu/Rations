import React from 'react';
import './about.css';

export default function aboutPage() {
    return (
        <div className="about-container">
            <h1 className="about-welcome">Welcome to Rations!</h1>
            <p> Rations is a recipe finding app - input ingredients you have lying around to see what you can make! </p>
            <p> Search by entering ingredient names separated by commas i.e "bread, eggs" </p>
            <p> Liking a recipe adds it to your favorites - check out Favorites to see what recipes you've liked and click to see that recipe </p>
            <p> Comment on recipes to let others know how you feel </p>
        </div>
    )
}
