import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { MovieContext } from "./MovieProvider"
import "./Movie.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const MovieDetail = () => {
  const { myMovies, getMyMovies, deleteMyMovie, getMyMovieById } = useContext(MovieContext)
  const [movie, setMovie] = useState({})
  const { myMovieId } = useParams();
  const history = useHistory()

  // Get all saved movies, then find id of the specific movie on each detail page
  useEffect(() => {
    getMyMovies()
    const thisMovie = myMovies.find(m => m.id === parseInt(myMovieId))
    setMovie(thisMovie)
  }, [myMovieId])

  // Delete a movie from local database, then change page to My Movie list
  const deleteMovie = () => {
    deleteMyMovie(movie)
      .then(() => {
        history.push("/movies")
      })
  }

  // Finds the movie object in local database, then allows user to edit by changing page to Edit Movie Form
  const editMovie = (event) => {
    getMyMovieById(movie).then(() => {
      history.push(`/movies/edit/${event.target.id}`)
    })
  }

  return (
    <>
      <Container className="detail text-center d-flex">
        <Card className="detail_card d-flex mx-auto" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <p>{movie.language}</p>
            <p>{movie.releaseDate}</p>
            <p>{movie.dateWatched}</p>
            <p>{movie.watchedWith}</p>
            <p>{movie.review}</p>
            <Button onClick={deleteMovie} variant="dark">Delete Movie</Button>
            <Button className="form_button" id={movie.id} onClick={editMovie} variant="dark">Edit Movie</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}