import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import "./Movie.css";

// class Movie extends Component {
    
//     // 컴포넌트에서 props 확인 
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         //console.log(this.props);
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h2>{this.props.title}</h2>
//             </div>
//         );
//     }
// }


// class MoviePoster extends Component {
    
//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         //console.log(this.props.posterimg);
//         return(
//             <div className="card">
//                 <img src={this.props.poster} className="imgsize" alt=""/>
//             </div>
//         );
//     }
// }

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre,index ) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                     text ={synopsis}
                     maxLine='4'
                     ellipsis=' ...'
                     trimRight
                     basedOn='letters'
                    />
                </div>
            </div>
    </div>     
    )
}



function MovieGenre({genre, index}){
    return (
        <span className="Movie__Genre" key={index}>{genre}</span>
    )
}

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} className="Moive__Poster" alt={alt} title={alt}/>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.array.isRequired   
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}


export default Movie;