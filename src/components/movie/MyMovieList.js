import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { MovieContext } from "./MovieProvider"
import "./Movie.css"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export const MyMovieList = (props) => {
  const { getMyMovies, myMovies } = useContext(MovieContext)

  useEffect(() => {
    getMyMovies()
  }, [])

  return (
    <>
      <Container className="text-center">
        <h1 className="page_title">My Movies</h1>
      </Container>
      <div className="movie_list text-center">
        {
          myMovies.map(movie =>
            <Card className="movie_card" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
              <Card.Body>
                <Link className="text-black" to={`/movies/detail/${movie.id}`}>{movie.title}</Link>
              </Card.Body>
            </Card>
          )
        }
      </div>
    </>
  )
}
