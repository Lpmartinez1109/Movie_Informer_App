import React, { Component } from 'react';
import './App.css';
import MovieRow from "./MovieRow.js";
import $ from "jquery";

class App extends Component{
  constructor(props){
    super(props)
    this.state={}
    console.log("This is a test")
      this.movieSearch()
  }
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
  userSearch(event){
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.movieSearch(searchTerm)
  }
  render(){
  return (
    <div className="App">
     <table className="titleHeader">
       <tbody>
         <tr>
           <td>
            <img width="50" src="movie_icon.png" />
           </td>
           <td width="8"/>
           <td>
             <h1>Movie Informer App</h1>
           </td>
         </tr>
       </tbody>
     </table>
     <input className="titleSearch" onChange={this.userSearch.bind(this)} placeholder="Enter search here"/><input type="button" value="search" />
     {this.state.rows}
    </div>
  );
  }
}
export default App;
