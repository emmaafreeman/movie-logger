import React, { useState, createContext } from "react"
import { tmdbKey } from "../../apiKeys"

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [myMovies, setMyMovies] = useState([])
    const [apiMovies, setApiMovies] = useState([])
    const [apiMovieById, setApiMovieById] = useState({})
    const [myMovieById, setMyMovieById] = useState({})


    const getMyMovies = () => {
        return fetch("http://localhost:8088/movies")
        .then(res => res.json())
        .then(setMyMovies)
    }

    const getMyMovieById = (movie) => {
        return fetch(`http://localhost:8088/movies/${movie.id}`)
        .then(res => res.json())
        .then(setMyMovieById)
    }

    const getApiMovies = (query) => {
        return fetch(`https://api.themoviedb.org/3/search/movie?${tmdbKey}&query=${query}`)
        .then(res => res.json())
        .then(data => setApiMovies(data.results))
    }

    const getApiMovieById = (query) => {
        return fetch(`https://api.themoviedb.org/3/movie/${query}?${tmdbKey}`)
        .then(res => res.json())
        .then(data => setApiMovieById(data))
        .then(() => {
            console.log("did stuff")
        })
    }

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

    const deleteMyMovie = movie => {
        return fetch(`http://localhost:8088/movies/${movie.id}`, {
            method: "DELETE"
        })
            .then(getMyMovies)
    }

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
