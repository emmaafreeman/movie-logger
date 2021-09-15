import React, { useState, useContext, useEffect } from "react"
import { MovieContext } from "./MovieProvider"
import { SearchMovieList } from "./SearchMovieList"

export const MovieSearch = () => {
  const { getApiMovies, apiMovies, searchTerms, setSearchTerms, setFiltered } = useContext(MovieContext)

  // useEffect(()=>{
  //   getApiMovies()
  // }, [])

  // useEffect(() => {
  //   if (searchTerms === apiMovies.original_title) {
  //     const subset = apiMovies.filter(movie => movie.original_title.toLowerCase().includes(searchTerms))
  //     setFiltered(subset)
  //   }
  // }, [searchTerms, apiMovies])

  const searchResults = (event) => {
    event.preventDefault()
    setSearchTerms(event.target.value)
    getApiMovies()
  }

  return (
    <>
      <form onSubmit={searchResults}>
        <input type="text" placeholder="Movie Search" />
        <input type="submit" />
      </form>
    </>
  )
}


// export const MovieSearch = (props) => {
//   const { myMovies, addmyMovies, apiMovies, getApiMovies } = useContext(MovieContext)

//   const handleControlledInputChange = (event) => {

//     for (movie of apiMovies) {
//       const searchResults = []
      
//       if (movie.title === event.target.value) {
//         searchResults.push(movie)
//         return searchResults
//       } else {


//     const movieData = {
//       title: "",
//       release: "",
//       language: "",
//       image: ""
//     }

//     for (movie of apiMovies) {
//       if (movie.title === event.target.value) {
//         movieData.title = movie.title
//         movieData.release = movie.release_date
//         movieData.language = movie.original_language
//         movieData.image = movie.poster_path

//         return movieData
//       } else {

//       }
//     }
    
//     apiMovies.map(movie => 
//                     )
//     // const newMovie = { ...movie }

//     // newMovie[event.target.id] = event.target.value

//     // setMyMovie(newMovie)
//   }

//   return (
//   <>
//     <input type="text" placeholder="Search Movies" onChange={handleControlledInputChange} />

//   </>
//   );
// }