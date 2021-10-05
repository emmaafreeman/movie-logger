import React, { useContext, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { MovieContext } from "./MovieProvider.js"
import "./Movie.css"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const EditMovieForm = () => {
  const { editMyMovie, myMovieById } = useContext(MovieContext)
  const history = useHistory();

  // Create new object for form to update and add to local database file
  const [movieToEdit, setMovieToEdit] = useState({
    id: myMovieById.id,
    title: myMovieById.title,
    language: myMovieById.language,
    releaseDate: myMovieById.releaseDate,
    poster: myMovieById.poster,
    dateWatched: myMovieById.dateWatched,
    watchedWith: myMovieById.watchedWith,
    review: myMovieById.review
  });

  // Update movieToEdit object with values entered into form inputs
  const handleControlledInputChange = (event) => {
    const newMovieToEdit = { ...movieToEdit }
    newMovieToEdit[event.target.id] = event.target.value
    setMovieToEdit(newMovieToEdit)
  }

  // Edit movie object in local database file, then change page to Movie Detail page
  const handleClickEditMovie = (event) => {
    event.preventDefault()
    const myMovie = movieToEdit
    editMyMovie(myMovie).then(() => history.push(`/movies/detail/${myMovie.id}`))
    }

  return (
    <Container>
      <Form className="text-center">
        <h2 className="page_title"> Edit Movie </h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" id="title" placeholder="Title" value={movieToEdit.title} onChange={handleControlledInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" id="language" placeholder="Language" value={movieToEdit.language} onChange={handleControlledInputChange} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" id="releaseDate" placeholder="Release date" value={movieToEdit.releaseDate} onChange={handleControlledInputChange} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" id="dateWatched" placeholder="Date watched" value={movieToEdit.dateWatched} onChange={handleControlledInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" id="watchedWith" placeholder="Watched with" value={movieToEdit.watchedWith} onChange={handleControlledInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" id="review" placeholder="Review" value={movieToEdit.review} onChange={handleControlledInputChange} />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={handleClickEditMovie}>
          Save Movie
        </Button>
        <Button className="form_button" variant="dark" type="submit" onClick={() => history.push(`/movies/detail/${movieToEdit.id}`)}>
          Cancel
        </Button>
      </Form>
    </Container>
  )
}

