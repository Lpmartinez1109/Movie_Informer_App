import React, { Component } from 'react';
import './App.css';
import MovieRow from "./MovieRow.js";
import $ from "jquery";

class App extends Component{
  constructor(props){
    super(props)
    this.state={

    }
    console.log("This is a test")
    // const movies  =[
    //   {id: 0, poster_src:"", title:"Hello this is a test", overview:"this is a test!"},
    //   {id:1, poster_src:"",  title: "Hello this is not a test", overview:"This is not a test!"}
    // ]

    //   var movieRows =[];
    //   movies.forEach((movie)=> {
    //     console.log(movie.title)
    //     const movieRow =<MovieRow movie={movie} />
    //     movieRows.push(movieRow)
    //   })
    //   this.state ={rows: movieRows}
      this.movieSearch()
  }
  movieSearch(){
    console.log("This is working too!")
    const URL = "https://api.themoviedb.org/3/search/movie?query=avengers&api_key=893c4ac2bf04e193ec65b6d4d79b7caf"
    $.ajax({
      url: URL,
      success: (searchResults) => {
        console.log("data search successful")
        const results = searchResults.results
        var movieRows = []
        results.forEach((movie)=> {
          console.log(movie.title)
          const movieRow =<MovieRow movie={movie}/>
          movieRows.push(movieRow)
        })
        this.setState({rows: movieRows})
      },
      error:(xhr,status, err )=>{
        console.errpr("data search unsuccessful")
      }
    })
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
     <input className="titleSearch" placeholder="Enter search here"/>
     {this.state.rows}
    </div>
  );
  }
}
export default App;
