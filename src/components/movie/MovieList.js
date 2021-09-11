import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { MovieContext } from "./MovieProvider"
import "./Movie.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const MovieList = () => {
    const { getMovies, movies } = useContext(MovieContext)
    const history = useHistory()

    useEffect(()=>{
        getMovies()
    }, [])

    return (
        <>
            <h1>Movies</h1>

            {/* <button onClick={() => history.push("/animals")}>
                Make Reservation
            </button> */}

            <div className="animals">
                {
                    movies.map(movie => <Link to={`/animals/detail/${movie.id}`}>
                          { movie.name }
                        </Link>
                    )
                }
            </div>
        </>
    )
}
