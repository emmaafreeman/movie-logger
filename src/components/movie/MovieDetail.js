import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import "./Movie.css"
import { useParams, useHistory } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
      <div className="detail">
        <Card className="detail_card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ `https://image.tmdb.org/t/p/w500/${movie.poster}`} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
              <p>{ movie.language }</p>
              <p>{ movie.releaseDate }</p>
              <p>{ movie.dateWatched }</p>
              <p>{ movie.watchedWith }</p>
              <p>{ movie.review }</p>
              <Button  onClick={deleteMovie} variant="dark">Delete Movie</Button>
              <Button  className="form_button" id={movie.id} onClick={editMovie} variant="dark">Edit Movie</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}