import React, { Component } from 'react';
import '../styles/Movie.css';

class Movie extends Component {
    
    
    render() {
        return (
            <div>
                {this.props.movies.map(m => {

                    return <div key={m.id} className='movie-container'>
                        <a href={`/catalog/${m.id}`}><img src={m.img} className="movie-image" alt = ""></img> </a>
                        <div> {m.title} </div>
                        <button className='add-button' onClick = {this.rentMovie}>Add</button>

                    </div>

                })}
            </div>
        );
    }
}

export default Movie;