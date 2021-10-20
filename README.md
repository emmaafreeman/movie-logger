# Movie Logger

The goal of this project was to streamline the movie-logging process by pre-populating standard movie data and allowing the user to track other data that is more subjective, like who they watched a movie with or when they watched it. 

The user can search for a movie within The Movie Database's API, save that movie to a list of their own movies, and the user can edit or delete the movies in their list. The fields that are pre-populated are a movie's title, release date, and language. A user can choose to add the date they watched a film, who they watched it with, and their review of the film.

Future features will include more fields that pre-populate from the API, such as key credits like director and cinematographer, as well as filters on the My Movies page, that allow a user to sort by movie title, year, director, etc.

### Technologies Used
1. Javascript
2. React.js
3. React Bootstrap
4. JSON Server
5. The Movie Database API - https://www.themoviedb.org/documentation/api

### Starting the local API

Open a terminal window and go to the `movie-logger` directory.

1. `cd api`
2. `json-server -p 8088 database.json`

### npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.