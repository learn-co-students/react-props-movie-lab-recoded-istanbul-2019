import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(el => (
      <div>
        <MovieCard title={el.title} IMDBRating={el.IMDBRating}  genres={el.genres} poster={el.poster}/>
      </div>
    ))
  }  

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
