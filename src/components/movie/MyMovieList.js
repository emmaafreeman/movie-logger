import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { MovieContext } from "./MovieProvider"
import "./Movie.css"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"

export const MyMovieList = () => {
    const { getMyMovies, myMovies } = useContext(MovieContext)
    const history = useHistory()
    const myMovieId = useParams()

    useEffect(()=>{
        getMyMovies()
    }, [])

    return (
        <>
            <h1>Movies</h1>
            <div>
                {
                    myMovies.map(movie => <Link to={`/movies/detail/${movie.id}`}>
                          { movie.title }
                        </Link>
                    )
                }
            </div>
        </>
    )
}
