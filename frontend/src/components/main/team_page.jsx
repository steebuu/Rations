import React, { Component } from 'react'
import './team.css';

export default class TeamPage extends Component {
    render() {
        return (
            <div className="team-div">
                <div>
                    <h2>Ryan Monahan</h2>
                    <a href="https://github.com/Rmonahan"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/ryan-monahan-99323b184/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://angel.co/ryan-monahan-2"><i className="fab fa-angellist"></i></a>
                    <a href="https://rmonahan.github.io/"><i className="fas fa-suitcase"></i></a>
                </div>
                <div>
                    <h2>Shree Patel</h2>
                    <a href="https://github.com/ShreePatel95"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/shree1795/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://angel.co/shree-patel"><i className="fab fa-angellist"></i></a>
                    <a href="https://www.shreejpatel.com/"><i className="fas fa-suitcase"></i></a>
                </div>
                <div>
                    <h2>Steve Liu</h2>
                    <a href="https://github.com/steebuu"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/liu-steve/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://angel.co/steve-liu-8"><i className="fab fa-angellist"></i></a>
                    <a href=""><i className="fas fa-suitcase"></i></a>
                </div>
                <div>
                    <h2>Valerie Whitehouse</h2>
                    <a href="https://github.com/vawhitehouse"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/valeriewhitehouse/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://angel.co/valerie-whitehouse"><i className="fab fa-angellist"></i></a>
                    <a href=""><i className="fas fa-suitcase"></i></a>
                </div>
            </div>
        )
    }
}

