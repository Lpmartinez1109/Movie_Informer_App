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
              <img className="moviePoster" alt={this.props.movie.original_title} width="120" src={this.props.movie.poster_src}/>
            </td>
            <td>
             <h3 classname="movieTitle">{this.props.movie.title}</h3>
             <h4 className="releaseDate">Release Date: {this.props.movie.release_date}</h4>
              <p className="overviewSum">{this.props.movie.overview}</p>
              <input className="viewBtn" type="button" onClick={this.viewMovie.bind(this)} value="view" />
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow;