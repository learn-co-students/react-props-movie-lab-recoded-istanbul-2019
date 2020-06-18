import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
   let movieCards = movieData.map(item => {
    return(
      <div>
      <MovieCard title={item.title} genres={item.genres} IMDBRating={item.IMDBRating} poster={item.poster}  />
    </div>)
   })
   return movieCards;
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}