import React from "react"
import { Route } from "react-router-dom"
import { MyMovieList } from "./movie/MyMovieList"
import { MovieProvider } from "./movie/MovieProvider"
import { MovieSearch } from "./movie/MovieSearch"
import { AddMovieForm } from "./movie/AddMovieForm"
import { MovieDetail } from "./movie/MovieDetail"
import { EditMovieForm } from "./movie/EditMovieForm"


export const ApplicationViews = () => {
    return (
        <>  
            <MovieProvider>
                <Route exact path="/">
		            <MovieSearch />
	            </Route>
                <Route exact path="/movies">
		            <MyMovieList />
	            </Route>
                
                <Route exact path="/movies/detail/:myMovieId">
		            <MovieDetail />
	            </Route>

                <Route path="/movies/edit/:myMovieId">
                    <EditMovieForm />
                </Route>

                <Route path="/movies/add/:movieId">
                    <AddMovieForm />
                </Route>
            </MovieProvider>
        </>
    )
}