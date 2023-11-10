import React from 'react';
import { movie } from '../../../Data/index';
import Button from '@mui/material-next/Button';
import MovieIcon from '@mui/icons-material/Movie';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MoviePage = () => {
    const movies = movie[0];
  return (
    <div>
      <div className='bgImg'>
        <img src={movies.backGroundImage} alt={movies.name} />
        <div>
            <div>{movies.year}</div>
            <div>{movies.genre.map((data,index)=>(
                <p key={index}>{data}</p>
            ))};
            </div>
            <div>{movies.time}</div>
            <div>{movies.rating}</div>
        </div>
        <div>
            <img src={movies.nameImage} alt={movies.name} />
        </div>
        <div>
            <p>{movies.desc}</p>
        </div>
        <div>
            Starring: {movies.starring.map((data,index)=>(
                <p key={index}>{data}</p>
            ))};
        </div>
        <div>
        <Button
            color="primary"
            disabled={false} startIcon={<MovieIcon />}
            size="medium" variant="outlined"
        >
            Watch Trailer
        </Button>
        <Button
            color="primary"
            disabled={false} startIcon={<PlayArrowIcon />}
            size="medium" variant="outlined"
        >
        Play
        </Button>
        </div>
      </div>
    </div>
  )
}

export default MoviePage
