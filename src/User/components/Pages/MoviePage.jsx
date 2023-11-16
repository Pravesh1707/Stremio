import React from 'react';
import "./../Css/MoviePage.css";
import { movie } from '../../../Data/index';
import Button from '@mui/material-next/Button';
import MovieIcon from '@mui/icons-material/Movie';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MoviePage = () => {
    const movies = movie[0];
  return (
    <div>
      <div className='page'>
        <img className="bgImg" src={movies.backGroundImage} alt={movies.name} />
        <div className='details'>
            <div className='grty'>
                <div className='border-black'>{movies.year}</div>
                <div className='genre'>{movies.genre.map((data,index)=>(
                        <p key={index}>{data}</p>
                    ))}
                </div>
                <div>{movies.time}</div>
                <div>{movies.rating}</div>
            </div>
            <div className='nameImg'>
                <img src={movies.nameImage} alt={movies.name} />
            </div>
            <div className='example'>
                <div className='desc'>
                    <p>{movies.desc}</p>
                </div>
                <div className='stars'>
                    Starring : {movies.starring.map((data,index)=>(
                        <p key={index}>{data}</p>
                    ))}
                </div>
                <div className='btn'>
                    <div>
                    <Button
                        color="primary"
                        disabled={false} startIcon={<MovieIcon />}
                        size="medium" variant="outlined"
                    >
                        Watch Trailer
                    </Button>
                    </div>
                    <div>
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
        </div>
      </div>
    </div>
  )
}

export default MoviePage
