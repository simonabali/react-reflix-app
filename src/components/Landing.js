import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Landing.css';

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { name: "Simona" },
                { name: "Cristina" },
                { name: "Mum" },
                { name: "Dad" },
            ]
          
        }
    }
    render() {
        return (
            <div className ="users-container">
                {this.state.users.map(u => <Link to= '/catalog' key = {u.name}><div className = "each-user">{u.name}</div></Link>)}
            </div>
        );
    }
}

export default Landing;