import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { MovieContext } from "./MovieProvider"
import "./Movie.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const SearchMovieList = () => {
    const { getApiMovies, apiMovies, searchTerms } = useContext(MovieContext)
    const [ filteredMovies, setFiltered ] = useState([""])
    const history = useHistory()

    useEffect(()=>{
        getApiMovies()
    }, [])

    useEffect(() => {
      if (searchTerms !== "") {
        // If the search field is not blank, display matching movies
        const subset = apiMovies.filter(movie => movie.title.toLowerCase().includes(searchTerms))
        setFiltered(subset)
      }
    }, [searchTerms, apiMovies])

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