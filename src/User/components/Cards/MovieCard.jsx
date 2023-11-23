import React from 'react'
import {movie} from "../../../Data/index.js"
import "../Css/MovieCard.css"
const MovieCard = () => {
  // const movies = movie;
  return (
    <div>
      <div className='icon' >
        {movie.map((data,index)=>(
          <div className='iconImage' key={index}>
            <img src={data.Image} alt={data.name} />
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default MovieCard
