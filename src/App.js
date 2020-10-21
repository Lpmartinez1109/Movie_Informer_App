import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    console.log("This is a test")
    const movies  =[
      {id: 0, title:"Hello this is a test", overview:"this is a test!"}
    ]
    this.state = {
      rows: [
        <p key="1">This is a test</p>,
        <p key="2">This is a test</p>,
        <p key="3">This is a test</p>
      ]
    }
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
