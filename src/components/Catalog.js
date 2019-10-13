import React, { Component } from 'react';
import Movie from './Movie';
import '../styles/Catalog.css';
import Search from './Search';

class Catalog extends Component {
    render() {
        let anyRented = this.props.movies.some(m => m.isRented === true)
        let rentedMovies = this.props.movies.filter(m => m.isRented === true)
        return (<div>
        <Search movies={this.props.movies} changeRented = {this.props.changeRentedStatus} searchFunc = {this.props.searchFunc} search = {this.props.search}/>
            <div id="movies-catalog">

                <div id="rented-movies">
                    <h3 className="rented-title">Rented Movies</h3>
                    {anyRented === true
                        ? <div className="rented-movies-only">
                            {rentedMovies.map(m => <Movie key={m.id} m={m} changeRented={this.props.changeRented} />)}
                        </div>
                        : null}
                </div>

                <div id="all-movies">
                    <h3>All movies</h3>
                    {this.props.movies.map(m => <Movie key={m.id} m={m} changeRented={this.props.changeRented} />)}
                </div>
            </div>
        </div>
        );
    }
}

export default Catalog;