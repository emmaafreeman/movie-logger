import React from "react"
import { Route } from "react-router-dom"
import { MyMovieList } from "./movie/MyMovieList"
import { MovieProvider } from "./movie/MovieProvider"
import { MovieSearch } from "./movie/MovieSearch"
import { SearchMovieList } from "./movie/SearchMovieList"
 
// import { MovieDetail } from "./movie/MovieDetail.js"

export const ApplicationViews = () => {
    return (
        <>
            {/* <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider> */}
                
            <MovieProvider>
                <Route exact path="/">
		            <MovieSearch />
                    <SearchMovieList />
	            </Route>
                <Route exact path="/movies">
		            <MyMovieList />
	            </Route>
                
                {/* <Route exact path="/movies/detail/:movieId(\d+)">
		            <MovieDetail />
	            </Route> */}

                {/* <Route exact path="/movies/add">
                    <MovieForm />
                </Route> */}
            </MovieProvider>

            {/* <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
                <Route exact path="/employees/create">
                    <EmployeeForm />
                </Route>
            </EmployeeProvider> */}
        </>
    )
}