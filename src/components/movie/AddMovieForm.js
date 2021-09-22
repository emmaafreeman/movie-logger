import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider.js"
// import "./Animal.css"
import { useHistory, useParams } from 'react-router-dom';

export const AddMovieForm = () => {
  const { myMovies, addMyMovie, apiMovies, getApiMovies, getApiMovieById, apiMovieById, setApiMovieById } = useContext(MovieContext)
  const history = useHistory();
  const {movieId} = useParams();

  const [newMovie, setNewMovie] = useState({
    title: apiMovieById.original_title,
    language: apiMovieById.original_language,
    releaseDate: apiMovieById.release_date,
    director: "",
    dateWatched: "",
    watchedWith: "",
    review: ""
  });

  const handleControlledInputChange = (event) => {
    const newMovieToAdd = { ...newMovie }
    newMovieToAdd[event.target.id] = event.target.value
    setNewMovie(newMovieToAdd)
  }

  const handleClickSaveMovie = (event) => {
    event.preventDefault()
    const myMovie = newMovie
    addMyMovie(myMovie).then(() => history.push("/movies"))
    }

  return (
    <form>
      <h2>Add New Movie</h2>
      <fieldset>
        <div>
          <input type="text" id="title" placeholder="Title" value={newMovie.title} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input type="text" id="language" placeholder="Language" value={newMovie.language} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input type="text" id="releaseDate" placeholder="Release date" value={newMovie.releaseDate} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input type="text" id="dateWatched" placeholder="Date watched" value={newMovie.dateWatched} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input type="text" id="watchedWith" placeholder="Watched with" value={newMovie.watchedWith} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input type="text" id="review" placeholder="Review" value={newMovie.review} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button onClick={handleClickSaveMovie}>
        Save Movie
      </button>
      <button onClick={() => history.push("/")}>
        Cancel
      </button>
    </form>
  )
}