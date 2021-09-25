import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { MovieContext } from "./MovieProvider"
import "./Movie.css"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import Card from 'react-bootstrap/Card';

export const MyMovieList = () => {
    const { getMyMovies, myMovies } = useContext(MovieContext)
    const history = useHistory()
    const myMovieId = useParams()

    useEffect(()=>{
        getMyMovies()
    }, [])

    return (
        <>
            <h1 className="page-title">Movies</h1>
            <div className="movie_list">
                {
                    myMovies.map(movie => 
                        <Card className="movie_card" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ `https://image.tmdb.org/t/p/w500/${movie.poster}`} />
                            <Card.Body>
                                <Link to={`/movies/detail/${movie.id}`}>{ movie.title }</Link>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </>
    )
}
