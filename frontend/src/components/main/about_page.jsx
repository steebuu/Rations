import React from 'react';
import './about.css';

export default function aboutPage() {
  return (
    <div className="about-container">
      <h1 className="about-welcome">Welcome to Rations!</h1>
      <div className="about-direction"><i class="fas fa-utensils"></i><p>Rations is a recipe finding app. You can input ingredients you have lying around to see what you can make!</p></div>
      <div className="about-direction"><i class="fas fa-search"></i><p>Search by entering ingredient names separated by commas i.e "bread, eggs"</p></div>
      <div className="about-direction"><i class="fas fa-thumbs-up"></i><p>Liking a recipe adds it to your favorites. Be sure to check out the Favorites tab once logged in to see what recipes you've liked and click to see that recipe</p></div>
      <div className="about-direction"><i class="fas fa-comments"></i><p>Comment on recipes to let others know how you feel about the recipe</p></div>
    </div>
  )
}
