import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    console.log("This is a test")
    const movies  =[
      {id: 0, title:"Hello this is a test", overview:"this is a test!"},
      {id:1, title: "Hello this is not a test", overview:"This is not a test!"}
    ]
    this.state = {
      rows: [
        <p key="1">This is a test</p>,
        <p key="2">This is a test</p>,
        <p key="3">This is a test</p>
      ]}
      var moviesRows =[];
      movies.forEach((movie)=> {
        console.log(movie.title)
        const movieRow =<table>
          <tbody>
            <tr>
              <td>
                <img src=""/>
              </td>
              <td>
                {movie.title}
              </td>
            </tr>
          </tbody>
        </table>
        moviesRows.push(<p key={movie.id}>{movie.title} {movie.overview}</p>)
      })
      this.state ={rows: moviesRows}
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
