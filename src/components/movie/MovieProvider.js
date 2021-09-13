import React, { useState, createContext } from "react"

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [myMovies, setMyMovies] = useState([])
    const [apiMovies, setApiMovies] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getMyMovies = () => {
        return fetch("http://localhost:8088/movies")
        .then(res => res.json())
        .then(setMyMovies)
    }

    const getApiMovies = () => {
        return fetch("https://api.themoviedb.org/3/movie/550?api_key=49f0891e83751371d34969a6a338d419")
        .then(res => res.json())
        .then(setApiMovies)
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
            myMovies, getMyMovies, addMyMovie, getApiMovies, apiMovies, searchTerms, setSearchTerms
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}
