import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
   let movieCardInfos = movieData.map(el => {
    return(
      <div>
      <MovieCard title={el.title} genres={el.genres} IMDBRating={el.IMDBRating} poster={el.poster}  />
    </div>)
   })
   return movieCardInfos;
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
