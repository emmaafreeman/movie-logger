import React, { useContext, useState } from "react"
import { useHistory } from 'react-router-dom';
import { MovieContext } from "./MovieProvider.js"
import "./Movie.css"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const AddMovieForm = () => {
  const { addMyMovie, apiMovieById } = useContext(MovieContext)
  const history = useHistory();

  // Create new object for form to update and add to local database file
  const [newMovie, setNewMovie] = useState({
    title: apiMovieById.original_title,
    language: apiMovieById.original_language,
    releaseDate: apiMovieById.release_date,
    poster: apiMovieById.poster_path,
    director: "",
    dateWatched: "",
    watchedWith: "",
    review: ""
  });

  // Update newMovie object with values entered into form inputs
  const handleControlledInputChange = (event) => {
    const newMovieToAdd = { ...newMovie }
    newMovieToAdd[event.target.id] = event.target.value
    setNewMovie(newMovieToAdd)
  }

  // Add newMovie object to local database file, then change page to My Movies list
  const handleClickSaveMovie = (event) => {
    event.preventDefault()
    const myMovie = newMovie
    addMyMovie(myMovie).then(() => history.push("/movies"))
    }

  return (
    <div className="form">
    <Container>
      <Form className="text-center">
        <h2 className="page_title"> Add New Movie </h2>

        <Form.Group className="mb-3">
          <Form.Control type="text" id="title" placeholder="Title" value={newMovie.title} onChange={handleControlledInputChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" id="language" placeholder="Language" value={newMovie.language} onChange={handleControlledInputChange} />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Control type="text" id="releaseDate" placeholder="Release date" value={newMovie.releaseDate} onChange={handleControlledInputChange} />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Control type="text" id="dateWatched" placeholder="Date watched" value={newMovie.dateWatched} onChange={handleControlledInputChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" id="watchedWith" placeholder="Watched with" value={newMovie.watchedWith} onChange={handleControlledInputChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" id="review" placeholder="Review" value={newMovie.review} onChange={handleControlledInputChange} />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={handleClickSaveMovie}>
          Save Movie
        </Button>
        <Button className="form_button" variant="dark" type="submit" onClick={() => history.push("/")}>
          Cancel
        </Button>
      </Form>
    </Container>
    </div>
  )
}