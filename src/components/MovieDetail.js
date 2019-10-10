import React, { Component } from 'react';
import '../styles/MovieDetail.css';

class MovieDetail extends Component {
    render() {
        let movieId = this.props.match.params.movieId
        let movieData = this.props.movies[movieId]

        return (
            <div>
                <h1>{movieData.title}</h1>
                <h6>{movieData.year}</h6>
                <img src={movieData.img} className="movie-image-detail" alt = ""></img>
                <p>{movieData.descrShort}</p>
            </div>
        );
    }
}

export default MovieDetail;