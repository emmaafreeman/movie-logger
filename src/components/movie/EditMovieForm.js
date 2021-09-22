import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider.js"
// import "./Animal.css"
import { useHistory, useParams } from 'react-router-dom';

export const EditMovieForm = () => {
  const { myMovies, addMyMovie, apiMovies, getApiMovies, getApiMovieById, apiMovieById, setApiMovieById, editMyMovie, getMyMovieById, myMovieById, setMyMovieById} = useContext(MovieContext)
  const history = useHistory();
  const {movieId} = useParams();

  const [movieToEdit, setMovieToEdit] = useState({
    id: myMovieById.id,
    title: myMovieById.title,
    language: myMovieById.language,
    releaseDate: myMovieById.releaseDate,
    director: myMovieById.director,
    dateWatched: myMovieById.dateWatched,
    watchedWith: myMovieById.watchedWith,
    review: myMovieById.review
  });

  const handleControlledInputChange = (event) => {
    const newMovieToEdit = { ...movieToEdit }
    newMovieToEdit[event.target.id] = event.target.value
    setMovieToEdit(newMovieToEdit)
  }

  const handleClickEditMovie = (event) => {
    event.preventDefault()
    const myMovie = movieToEdit
    editMyMovie(myMovie).then(() => history.push("/movies"))
    }

  return (
    <form>
      <h2>Edit Movie</h2>
      <fieldset>
        <div>
          <input type="text" id="title" placeholder="Title" value={movieToEdit.title} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input type="text" id="language" placeholder="Language" defaultValue={movieToEdit.language} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input type="text" id="releaseDate" placeholder="Release date" defaultValue={movieToEdit.releaseDate} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input type="text" id="dateWatched" placeholder="Date watched" defaultValue={movieToEdit.dateWatched} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input type="text" id="watchedWith" placeholder="Watched with" defaultValue={movieToEdit.watchedWith} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input type="text" id="review" placeholder="Review" defaultValue={movieToEdit.review} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button onClick={handleClickEditMovie}>
        Save Movie
      </button>
      <button onClick={() => history.push(`/movies/detail/${movieToEdit.id}`)}>
        Cancel
      </button>
    </form>
  )
}