import React from 'react';
import './Layouts/moviedetail.css';

function MovieDetail(props) {
    var genre = '';
    console.log(props.movie)
    if (props.movie)
        genre = props.movie.moviesList[0].genre.split(',');

    return (
        props.movie &&
        <div>
            <div className="fullimage">
                <img src={props.movie.moviesList[0].fullimage} alt="MovieImg" />
            </div>

            <div className="movieDetails">
                <div className="movieImg">
                    <img src={props.movie.moviesList[0].image} alt="MovieImg" />
                </div>

                <div className="movieInfo">
                    <div className="movieTitle">{props.movie.moviesList[0].title} </div>
                    {props.movie.moviesList[0].language.toUpperCase()}<br />
                    {genre.map(g =>
                        <div className="genre">
                            {g.toUpperCase()}</div>
                    )}
                    <div>
                        <div className="relDt">
                            {props.movie.moviesList[0].releaseDate}
                        </div>
                        <div className="duration">
                            {props.movie.moviesList[0].duration}
                        </div>
                    </div>
                </div>
            </div>
            <div className="rating" style={{ 'position': 'relative' }}>
                <div className="pos-rating" style={{ 'position': 'absolute', 'left': '30%' }}>
                    <div className="votes" style={{ 'width': '30px' }}>
                        <div style={{ 'display': 'inline' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102" id="icon-heart">
                                <path fill='red' d="M4.3 39.4v-5.5c.9-3 1.4-6.2 2.8-9 4.4-8.9 11.6-14.2 22.1-14.2 8.2 0 14.1 4.1 18.9 10.2.6.8 1.2 1.6 1.8 2.5 1.6-2 3-3.9 4.6-5.5 6.1-6.1 13.5-8.7 22.2-6.5 12.4 3.1 19.9 15.4 18.8 28-.8 9.1-4.9 16.9-10.7 23.9-9.3 11.2-21.2 19.2-34 26.1-.4.2-1.3.2-1.8 0-11-5.9-21.3-12.7-29.9-21.6-5.9-6.1-10.8-12.9-13.2-21-.7-2.5-1-5-1.6-7.4z">
                                </path>
                            </svg>
                        </div>
                        <div style={{ 'display': 'inline' }}>88%
                            </div>
                    </div>
                    <div className="criticrating">

                    </div>
                    <div className="usersrating">

                    </div>
                    <div className="rateit">

                    </div>
                </div>
            </div>
        </div >
    )
}
export default MovieDetail;