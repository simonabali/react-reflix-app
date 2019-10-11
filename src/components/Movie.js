import React, { Component } from 'react';
import '../styles/Movie.css';

class Movie extends Component {
rentMovie = (event) => {
    console.log(this.props.m.id)
    this.props.changeRented(this.props.m.id)
    
}

    render() {
        return (

            <div key={this.props.m.id} className='movie-container'>
                <a href={`/catalog/${this.props.m.id}`}><img src={this.props.m.img} className="movie-image" alt=""></img> </a>
                <div> {this.props.m.title} </div>
                {this.props.m.isRented === false ? <button className='add-button' onClick={this.rentMovie}>Add</button> : <button className='remove-button' onClick={this.rentMovie}>Remove</button>}

            </div>
        );
    }
}

export default Movie;