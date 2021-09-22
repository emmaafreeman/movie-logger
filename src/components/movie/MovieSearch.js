import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { MovieContext } from "./MovieProvider"

export const MovieSearch = () => {
  const { getApiMovies, apiMovies, getApiMovieById} = useContext(MovieContext)
  const history = useHistory()

  const searchResults = (event) => {
    event.preventDefault()
    if (event.target[0].value !== "") {
    getApiMovies(event.target[0].value)
    } else {
      window.alert("Please enter a movie title")
    }
  }

  const addMovie = (event) => {
    getApiMovieById(parseInt(event.target.id)).then(() => {
    history.push(`/movies/add/${event.target.id}`)
  })}

  return (
    <>
      <form onSubmit={searchResults}>
        <input type="text" placeholder="Movie Search" />
        <input type="submit" />
      </form>
      <div>
        {
          apiMovies.map(apiMovie =>
            <div>
              {apiMovie.original_title}
              <button id={apiMovie.id} onClick={addMovie}>
                Add New Movie
              </button>
            </div>
            )
        }
        </div>
    </>
  )
}