import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
     return movieData.map(movie =>{
      //  console.log(movie.title)
      return <MovieCard  title={movie.title} poster={movie.poster} genres={movie.genres} rating={movie.IMDBRating}  />
       }
      
      )
  }
  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
