import React from 'react'
import MovieSection from '../Section/MovieSection'

const RightSide = () => {
  return (
    <div>
      <MovieSection heading={"Treanding"}/>
      <MovieSection heading={"Popular"}/>
      <MovieSection heading={"Movies"}/>
      <MovieSection heading={"Series"}/>
    </div>
  )
}

export default RightSide
