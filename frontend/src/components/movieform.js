import React from 'react';
import { getMovie, putMovie } from './store/actions/movieAction';
import { connect } from 'react-redux';

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.props.getMovie(this.props.movieId);
        this.submitMovieReq = this.submitMovieReq.bind(this);
        this.fieldUpdate = this.fieldUpdate.bind(this);
        this.state = {
            movie: ({
                title: "",
                releaseDate: "",
                duration: "",
                genre: "",
                description: ""
            })
        }
    }
    submitMovieReq() {
        const movieId = this.props.movieId;
        this.props.putMovie(this.state.movie, movieId);
    }
    fieldUpdate(e) {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        });
    }

    render() {
        if (this.props.movie.movieData && this.props.movie.movieData.moviesList)
            console.log(this.props.movie.movieData.moviesList[0].title);
        return (
            this.props.movie.movieData &&
            this.props.movie.movieData.moviesList &&
            <div>
                <h3>Adding Movies</h3>
                <form>
                    <label className="custom-label" >Title: </label>
                    <input type="text" id="title" onChange={this.fieldUpdate} defaultValue={this.props.movie.movieData.moviesList[0].title}></input><br />
                    <label className="custom-label">Release Date:</label>
                    <input type="date" id="releaseDate" onChange={this.fieldUpdate} defaultValue={this.props.movie.movieData.moviesList[0].releaseDate}></input><br />
                    <label className="custom-label">Duration:</label>
                    <input type="number" id="duration" onChange={this.fieldUpdate} defaultValue={this.props.movie.movieData.moviesList[0].duration}></input><br />
                    <label className="custom-label">Genre:</label>
                    <input type="text" id="genre" onChange={this.fieldUpdate} defaultValue={this.props.movie.movieData.moviesList[0].genre}></input><br />
                    <label className="custom-label">Description:</label>
                    <input type="text" id="description" onChange={this.fieldUpdate} defaultValue={this.props.movie.movieData.moviesList[0].description}></input><br /><br />
                    <button onClick={this.submitMovieReq}>Submit</button>
                    <button>Cancel</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    movie: state.movies
})
export default connect(mapStateToProps, { getMovie, putMovie })(MovieForm);