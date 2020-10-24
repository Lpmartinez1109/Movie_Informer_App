import React from "react";
import MovieRow from "./MovieRow";

class MovieSearch extends React.Component{
    movieSearch(searchTerm){
        // var searchTerm = "";
        console.log("This is working too!")
        var API = "893c4ac2bf04e193ec65b6d4d79b7caf";
        const URL = "https://api.themoviedb.org/3/search/movie?query=" + searchTerm +"&api_key=" + API;
        $.ajax({
          url: URL,
          success: (searchResults) => {
            const results = searchResults.results
            
            var movieRows = []
    
            results.forEach((movie)=> {
    
              movie.poster_src = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
              const movieRow =<MovieRow key={movie.id} movie={movie}/>
              movieRows.push(movieRow)
            })
            this.setState({rows: movieRows})
          },
          error:(xhr,status, err )=>{
            console.error("data search unsuccessful")
          }
        })
      }
}

export default MovieSearch;