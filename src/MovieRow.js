import React from "react";

class MovieRow extends React.Component{
    viewMovie(){
        console.log("Viewing movie")
        console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render(){
        return <table key={this.props.movie.id}> 
        <tbody>
          <tr>
            <td>
              <div classname="column">
              <img className="moviePoster" alt={this.props.movie.original_title} width="120" src={this.props.movie.poster_src}/>
              </div>
            </td>
            <td>
             <div className="column">
             <span classname="movieTitle">{this.props.movie.title}</span>
             <h4 className="releaseDate">Release Date: {this.props.movie.release_date}</h4>
             </div>
             <div classname="column">
              <p className="overviewSum">{this.props.movie.overview}</p>
              <input className="viewBtn" type="button" onClick={this.viewMovie.bind(this)} value="view" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow;