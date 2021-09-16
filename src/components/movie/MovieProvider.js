import React, { useState, createContext } from "react"
import { tmdbKey } from "../../apiKeys"

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [myMovies, setMyMovies] = useState([])
    const [apiMovies, setApiMovies] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")
    const [ filteredMovies, setFiltered ] = useState([""])

    const getMyMovies = () => {
        return fetch("http://localhost:8088/movies")
        .then(res => res.json())
        .then(setMyMovies)
    }

    const getApiMovies = (query) => {
        return fetch(`https://api.themoviedb.org/3/search/movie?${tmdbKey}&query=${query}`)
        .then(res => res.json())
        .then(data => setApiMovies(data.results))
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

    return (
        <MovieContext.Provider value={{
            myMovies, getMyMovies, addMyMovie, getApiMovies, apiMovies, searchTerms, setSearchTerms, filteredMovies, setFiltered
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}
