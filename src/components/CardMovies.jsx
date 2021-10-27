import { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
// import { ListMovies } from '../redux/typesActions/movieList.types';
// import Poster from './modal/Poster';

const CardMovies = ({ movie }) => {
  const [showPoster, setShowPoster] = useState(false)
  const [objectPoster, setObjectPoster] = useState({})
  const handleShowPoster = (moviePoster) => {
    setShowPoster(true)
    setObjectPoster(moviePoster)
  }

  const closePoster = () => {
    setShowPoster(!showPoster)
  }

  return (
    <div data-testid="cardMovies">
        
        <img 
          src={movie.Poster}
          alt={movie.Title}
          className="h-80 w-56 rounded-xl object-cover cursor-pointer transform hover:-translate-y-2"
          onClick={() => {}}
        />
        <BrowserRouter>
          <Link to={`/${movie.Title}`}>
            <h1 className="text-base font-bold m-2">
              {movie.Title}
            </h1>
          </Link>
        </BrowserRouter>
        <div className="flex flex-row mx-2">
          <span className="font-normal text-sm">
            {movie.Type}
          </span>
          <span className="mx-1 -mt-0.5">•</span>
          <p className="font-normal text-sm">
            {movie.Year}
          </p>
        </div>
      {/* {showPoster && (
        <Poster 
          objectPoster = {objectPoster}
          closePoster = {closePoster}
        />
      )} */}
    </div>
  )
}

export default CardMovies
