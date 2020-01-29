import React, { Component } from 'react'
import './team.css';

export default class TeamPage extends Component {
    render() {
        return (
            <div className="team-div">
                <div className="member-div">
                    <div className="prof-pic-holder">
                        <img className="prof-pic" src="ryan_pic.jpeg"></img>
                    </div>
                    <h2>Ryan Monahan</h2>
                    <a className="team-link" href="https://github.com/Rmonahan"><i className="fab team-icon fa-github"></i></a>
                    <a className="team-link" href="https://www.linkedin.com/in/ryan-monahan-99323b184/"><i className="fab team-icon fa-linkedin"></i></a>
                    <a className="team-link" href="https://angel.co/ryan-monahan-2"><i className="fab team-icon fa-angellist"></i></a>
                    <a className="team-link" href="https://rmonahan.github.io/"><i className="fas team-icon fa-suitcase"></i></a>
                </div>
                <div className="member-div">
                    <div className="prof-pic-holder">
                        <img className="prof-pic" src="shree_pic.jpeg"></img>
                    </div>
                    <h2>Shree Patel</h2>
                    <a className="team-link" href="https://github.com/ShreePatel95"><i className="fab team-icon fa-github"></i></a>
                    <a className="team-link" href="https://www.linkedin.com/in/shree1795/"><i className="fab team-icon fa-linkedin"></i></a>
                    <a className="team-link" href="https://angel.co/shree-patel"><i className="fab team-icon fa-angellist"></i></a>
                    <a className="team-link" href="https://www.shreejpatel.com/"><i className="fas team-icon fa-suitcase"></i></a>
                </div>
                <div className="member-div">
                    <div className="prof-pic-holder">
                        <img className="prof-pic" src="steve_pic.jpeg"></img>
                    </div>
                    <h2>Steve Liu</h2>
                    <a className="team-link" href="https://github.com/steebuu"><i className="fab team-icon fa-github"></i></a>
                    <a className="team-link" href="https://www.linkedin.com/in/liu-steve/"><i className="fab team-icon fa-linkedin"></i></a>
                    <a className="team-link" href="https://angel.co/steve-liu-8"><i className="fab team-icon fa-angellist"></i></a>
                    <a className="team-link" href=""><i className="fas team-icon fa-suitcase"></i></a>
                </div>
                <div className="member-div">
                    <h2>Valerie Whitehouse</h2>
                    <a className="team-link" href="https://github.com/vawhitehouse"><i className="fab team-icon fa-github"></i></a>
                    <a className="team-link" href="https://www.linkedin.com/in/valeriewhitehouse/"><i className="fab team-icon fa-linkedin"></i></a>
                    <a className="team-link" href="https://angel.co/valerie-whitehouse"><i className="fab team-icon fa-angellist"></i></a>
                    <a className="team-link" href=""><i className="fas team-icon fa-suitcase"></i></a>
                </div>
            </div>
        )
    }
}

