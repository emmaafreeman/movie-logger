import React from "react"
import { Route } from "react-router-dom"
import { MovieList } from "./movie/MovieList"
import { MovieProvider } from "./movie/MovieProvider"
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
                <Route exact path="/movies">
		            <MovieList />
	            </Route>
                
                {/* <Route exact path="/movies/detail/:movieId(\d+)">
		            <MovieDetail />
	            </Route> */}

                {/* <Route exact path="/animals/create">
                    <AnimalForm />
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