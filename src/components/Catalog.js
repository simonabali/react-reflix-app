import React, { Component } from 'react';
import Movie from './Movie';
import RentedMovies from './RentedMovies';

class Catalog extends Component {
    render() {
    let anyRented = this.props.movies.some(m => m.isRented === true)
        return (
            <div>
                {anyRented === true ? <RentedMovies movies = {this.props.movies} changeRented = {this.props.changeRented}/> : null}
                <h3>All movies</h3>
                {this.props.movies.map(m => <Movie key = {m.id} m={m} changeRented = {this.props.changeRented}/>)}
            </div>
        );
    }
}

export default Catalog;