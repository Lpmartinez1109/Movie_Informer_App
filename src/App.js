import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <table className="titleHeader">
       <tbody>
         <tr>
           <td>
            <img width="50" src="movie_icon.png"/>
           </td>
           <td width="8"/>
           <td>
             <h1>Movie Informer App</h1>
           </td>
         </tr>
       </tbody>
     </table>
     <input className="titleSearch" placeholder="Enter search here"/>
    </div>
  );
}

export default App;
