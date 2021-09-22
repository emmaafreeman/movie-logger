import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import "./Movie.css"
import { useParams, useHistory } from "react-router-dom"

export const MovieDetail = (props) => {
    const { myMovies, getMyMovies, deleteMyMovie, editMyMovie, getMyMovieById } = useContext(MovieContext)
    const [ movie, setMovie ] = useState({})
    const { myMovieId } = useParams();
    const history = useHistory()
    

    useEffect(() => {
      getMyMovies()
      const thisMovie = myMovies.find(m => m.id === parseInt(myMovieId))
      setMovie(thisMovie)
  }, [myMovieId])

    const deleteMovie = () => {
      deleteMyMovie(movie)
        .then(() => {
          history.push("/movies")
        })
    }

    const editMovie = (event) => {
      getMyMovieById(movie).then(() => {
      history.push(`/movies/edit/${event.target.id}`)
    })}

    return (
    <>
      <section>
        <h3>{ movie.title }</h3>
        <div>
          <div>{ movie.language }</div>
          <div>{ movie.releaseDate }</div>
          <div>{ movie.dateWatched }</div>
          <div>{ movie.watchedWith }</div>
          <div>{ movie.review }</div>
        </div>
      </section>
      <button onClick={deleteMovie}>
          Delete
      </button>
      <button id={movie.id} onClick={editMovie}>
        Edit
      </button>
    </>
  )
}