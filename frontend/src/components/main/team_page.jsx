import React, { Component } from 'react'
import './team.css';

export default class TeamPage extends Component {
    render() {
        return (
            <div className="team-div">
                <div className="member-div">
                    <h2 className="team-title">Backend</h2>
                    <div className="member-main">
                        <div className="prof-pic-holder">
                            <img className="prof-pic" src="ryan_pic.jpeg"></img>
                        </div>
                        <div className="member-info">
                            <h3 className="member-name">Ryan Monahan</h3>
                  <p className="member-desc">As part of the backend team, I helped implement the database storage and retrieval using MongoDB as our database and Express.js as our backend routing controller. A large part of the data retrevial came from the Spoonacular API so I also helped figure out the optimal way to communicate with the Spoonacular API and return the required data.</p>
                        </div>
                    </div>
                    <div className="link-div">
                        <a className="team-link" href="https://github.com/Rmonahan" target="_blank"><i className="fab team-icon fa-github"></i></a>
                        <a className="team-link" href="https://www.linkedin.com/in/ryan-monahan-99323b184/" target="_blank"><i className="fab team-icon fa-linkedin"></i></a>
                        <a className="team-link" href="https://angel.co/ryan-monahan-2" target="_blank"><i className="fab team-icon fa-angellist"></i></a>
                        <a className="team-link" href="https://rmonahan.github.io/" target="_blank"><i className="fas team-icon fa-suitcase"></i></a>
                    </div>
                </div>
                <div className="member-div">
                    <h2 className="team-title">Frontend</h2>
                    <div className="member-main">
                        <div className="prof-pic-holder">
                            <img className="prof-pic" src="shree_pic.jpeg"></img>
                        </div>
                        <div className="member-info">
                            <h3 className="member-name">Shree Patel</h3>    
                  <p className="member-desc">As part of the frontend team, I helped forge the connection between the backend and the frontend using Redux to neatly organize the data fetched from the Spoonacular API into React components. In addition, I helped create the dark mode design of Rations using CSS to create a user friendly interface.</p>
                        </div>
                    </div>
                    <div className="link-div">
                        <a className="team-link" href="https://github.com/ShreePatel95" target="_blank"><i className="fab team-icon fa-github"></i></a>
                        <a className="team-link" href="https://www.linkedin.com/in/shree1795/" target="_blank"><i className="fab team-icon fa-linkedin"></i></a>
                        <a className="team-link" href="https://angel.co/shree-patel" target="_blank"><i className="fab team-icon fa-angellist"></i></a>
                        <a className="team-link" href="https://www.shreejpatel.com/" target="_blank"><i className="fas team-icon fa-suitcase"></i></a>
                    </div>
                </div>
                <div className="member-div">
                    <h2 className="team-title">Team Lead</h2>
                    <div className="member-main">
                        <div className="prof-pic-holder">
                            <img className="prof-pic" src="steve_pic.jpeg"></img>
                        </div>
                        <div className="member-info">
                            <h3 className="member-name">Steve Liu</h3>
                  <p className="member-desc">As team lead my responsibilities included determining app functionality, making sure backend and frontend were on the same page about the responses needed and being received, and leading daily stand ups to cover daily progress. I also worked heavily in the frontend and styling, where our team worked to determine how the Store would have access to necessary data on any given component.</p>
                        </div>
                    </div>
                    <div className="link-div">
                        <a className="team-link" href="https://github.com/steebuu" target="_blank"><i className="fab team-icon fa-github"></i></a>
                        <a className="team-link" href="https://www.linkedin.com/in/liu-steve/" target="_blank"><i className="fab team-icon fa-linkedin"></i></a>
                        <a className="team-link" href="https://angel.co/steve-liu-8" target="_blank"><i className="fab team-icon fa-angellist"></i></a>
                        <a className="team-link" href="#" target="_blank"><i className="fas team-icon fa-suitcase"></i></a>
                    </div>
                </div>
                <div className="member-div">
                    <h2 className="team-title">Fullstack</h2>
                    <div className="member-main">
                        <div className="prof-pic-holder">
                            <img className="prof-pic" src="valerie_pic.jpeg"></img>
                        </div>
                        <div className="member-info">
                            <h3 className="member-name">Valerie Whitehouse</h3>
                  <p className="member-desc">As the Full Stack team member I collaborated with the backend to help determine the best way to utilize the Spoonacular API as well as manage the MongoDB database. I also collaborated with the frontend to optimize the retrieval of data from the backend and helped with styling the user experience.</p>
                        </div>
                    </div>
                    <div className="link-div">
                        <a className="team-link" href="https://github.com/vawhitehouse" target="_blank"><i className="fab team-icon fa-github"></i></a>
                        <a className="team-link" href="https://www.linkedin.com/in/valeriewhitehouse/" target="_blank"><i className="fab team-icon fa-linkedin"></i></a>
                        <a className="team-link" href="https://angel.co/valerie-whitehouse" target="_blank"><i className="fab team-icon fa-angellist"></i></a>
                        <a className="team-link" href="#"  target="_blank"><i className="fas team-icon fa-suitcase"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

