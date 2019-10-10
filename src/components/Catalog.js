import React, { Component } from 'react';
import Movie from './Movie';
import RentedMovies from './RentedMovies';

class Catalog extends Component {
    render() {
    let anyRented = this.props.movies.some(m => m.isRented === true)
        return (
            <div>
                {anyRented === true ? <RentedMovies movies = {this.props.movies}/> : null}
                <h3>All movies</h3>
                <Movie movies={this.props.movies} />
            </div>
        );
    }
}

export default Catalog;