import React, { Component } from 'react';
import Movie from './Movie';

class RentedMovies extends Component {
    render() {
    let rentedMovies = this.props.movies.filter(m => m.isRented === true)    
    return (
            <div>
            <h3>Rented Movies</h3>
            <div>{rentedMovies.map(m => <Movie key = {m.id} m= {m}/>)}</div>
            </div>
        );
    }
}

export default RentedMovies;