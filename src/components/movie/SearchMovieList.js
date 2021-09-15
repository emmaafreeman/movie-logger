import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { MovieContext } from "./MovieProvider"
import "./Movie.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const SearchMovieList = () => {
  const { filteredMovies } = useContext(MovieContext)
  const history = useHistory()

    return (
      <>
        <div className="animals">
        {
          filteredMovies.map(movie =>
            <div>
              { movie.original_title }
              <button onClick={() => history.push("/movies/add")}>
                Add New Movie
              </button>
            </div>
            )
        }
        </div>
      </>
    )
  }