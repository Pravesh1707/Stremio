import React from 'react'
import MovieCard from  "../Cards/MovieCard"
import "../Css/MovieSection.css"

const MovieSection = ({heading}) => {
  return (
    <div>
        <div className='heading'><h2>{heading}</h2></div>
        <div><MovieCard /></div>
    </div>
  )
}

export default MovieSection
