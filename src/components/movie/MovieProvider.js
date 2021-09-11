import React, { useState, createContext } from "react"

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        return fetch("http://localhost:8088/movies")
        .then(res => res.json())
        .then(setMovies)
    }

    const addMovie = movieObj => {
        return fetch("http://localhost:8088/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movieObj)
        })
        .then(getMovies)
    }

    return (
        <MovieContext.Provider value={{
            movies, getMovies, addMovie
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}
