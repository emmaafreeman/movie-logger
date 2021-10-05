import React, { useState, createContext } from "react"
import { tmdbKey } from "../../apiKeys"

export const MovieContext = createContext()

export const MovieProvider = (props) => {
  // Create arrays/objects and functions that set the contents of those arrays/objects
  const [myMovies, setMyMovies] = useState([])
  const [apiMovies, setApiMovies] = useState([])
  const [apiMovieById, setApiMovieById] = useState({})
  const [myMovieById, setMyMovieById] = useState({})

  // Get saved movies local database
  const getMyMovies = () => {
    return fetch("http://localhost:8088/movies")
      .then(res => res.json())
      .then(setMyMovies)
  }

  // Get a movie from the local database by an id
  const getMyMovieById = (movie) => {
    return fetch(`http://localhost:8088/movies/${movie.id}`)
      .then(res => res.json())
      .then(setMyMovieById)
  }

  // Get movies from TMDb API by using search terms as a query
  const getApiMovies = (query) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?${tmdbKey}&query=${query}`)
      .then(res => res.json())
      .then(data => setApiMovies(data.results))
  }

  // Get a movie from TMDb API 
  const getApiMovieById = (query) => {
    return fetch(`https://api.themoviedb.org/3/movie/${query}?${tmdbKey}`)
      .then(res => res.json())
      .then(data => setApiMovieById(data))
  }

  // Add a movie to the local database file
  const addMyMovie = movieObj => {
    return fetch("http://localhost:8088/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movieObj)
    })
      .then(getMyMovies)
  }

  // Delete a movie from the local database file
  const deleteMyMovie = movie => {
    return fetch(`http://localhost:8088/movies/${movie.id}`, {
      method: "DELETE"
    })
      .then(getMyMovies)
  }

  // Edit a movie object within local database file
  const editMyMovie = movie => {
    return fetch(`http://localhost:8088/movies/${movie.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movie)
    })
      .then(getMyMovies)
  }

  return (
    <MovieContext.Provider value={{
      myMovies, getMyMovies, addMyMovie, getApiMovies, apiMovies, deleteMyMovie, editMyMovie, apiMovieById, setApiMovieById, getApiMovieById, getMyMovieById, setMyMovieById, myMovieById
    }}>
      {props.children}
    </MovieContext.Provider>
  )
}
