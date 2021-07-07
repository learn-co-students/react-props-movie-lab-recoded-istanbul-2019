import React, { Component, useLayoutEffect } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {


  generateMovieCards = () => {
    
    const listItems = movieData.map((movie , index) =>
      <MovieCard key ={index} title={movie.title} poster={movie.poster}  IMDBRating={movie.IMDBRating}  genres={movie.genres}   />
    );
    return listItems 
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
