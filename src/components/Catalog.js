import React, { Component } from 'react';
import Movie from './Movie';
import RentedMovies from './RentedMovies';
import '../styles/Catalog.css';

class Catalog extends Component {
    render() {
    let anyRented = this.props.movies.some(m => m.isRented === true)
        return (
            <div id = "movies-catalog">
                <div id="rented-movies">{anyRented === true ? <RentedMovies movies = {this.props.movies} changeRented = {this.props.changeRented}/> : null}
                </div>
                
                <div id= "all-movies">
                <h3>All movies</h3>
                    {this.props.movies.map(m => <Movie key = {m.id} m={m} changeRented = {this.props.changeRented}/>)}
                </div>
            </div>
        );
    }
}

export default Catalog;