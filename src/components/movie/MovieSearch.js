import React, { useContext } from "react"
import { MovieContext } from "./MovieProvider"


export const MovieSearch = () => {
  const { setSearchTerms } = useContext(MovieContext)

  return (
    <>
      <input type="text" 
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Movie Search" />
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