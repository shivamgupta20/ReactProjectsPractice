import React from 'react';
import { connect } from 'react-redux';
import { getMovies, delMovie, putMovieImage } from './store/actions/movieAction';
import { Link } from 'react-router-dom';
import SideNav from './sideNav';
import './Layouts/movies.css';

class ListMovies extends React.Component {

    constructor(props) {
        super(props);
        this.state = "";
        this.props.getMovies();
        this.fileSelect = this.fileSelect.bind(this);
        this.fileSelect = this.fileSelect1.bind(this);
        this.deleteMov = this.deleteMov.bind(this);
    }
    fileSelect(e, id) {
        const self = this;
        const file = e.target.files[0];
        var reader = new FileReader();
        var img = "";
        reader.onloadend = function () {

            img = reader.result;
            self.props.putMovieImage({ image: img }, id);
        }
        reader.readAsDataURL(file);
    }
    fileSelect1(e, id) {
        const self = this;
        const file = e.target.files[0];
        var reader = new FileReader();
        var img = "";
        reader.onloadend = function () {

            img = reader.result;
            self.props.putMovieImage({ image1: img }, id);
        }
        reader.readAsDataURL(file);
    }
    deleteMov(e, id) {
        e.preventDefault();
        this.props.delMovie(id);
    }
    render() {
        // console.log(this.props.movies);
        return (
            <div>
                <SideNav />
                {this.props.movies.MoviesData &&
                    this.props.movies.MoviesData.moviesList &&
                    <div className="MovieList">
                        <h3>Listing Movies</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th> Image</th>
                                    <th> Image 2</th>
                                    <th> Id </th>
                                    <th> Title </th>
                                    <th> Release Date</th>
                                    <th> Duration </th>
                                    <th> Genre </th>
                                    <th> Description</th>
                                    <th> Edit</th>
                                    <th> Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.movies.MoviesData.moviesList.map(eachMovie =>
                                        <tr key={eachMovie._id}>
                                            <td>
                                                <img src={eachMovie.image} alt="" style={{ width: "100px" }} />
                                                <input type="file" onChange={(e) => this.fileSelect(e, eachMovie._id)} />
                                            </td>
                                            <td>
                                                <img src={eachMovie.fullimage} alt="" style={{ width: "100px" }} />
                                                {/* <input type="file" onChange={(e) => this.fileSelect1(e, eachMovie._id)} /> */}
                                            </td>
                                            <td>{eachMovie._id}</td>
                                            <td>{eachMovie.title}</td>
                                            <td>{eachMovie.releaseDate}</td>
                                            <td>{eachMovie.duration}</td>
                                            <td>{eachMovie.genre}</td>
                                            <td>{eachMovie.description}</td>
                                            <td>
                                                <Link to={`/admin/editmovies/${eachMovie._id}`}>
                                                    Edit
                                        </Link>
                                            </td>
                                            <td>
                                                <button onClick={(e) => { this.deleteMov(e, eachMovie._id) }}>
                                                    Delete
                                        </button>
                                            </td>
                                        </tr>
                                    )}
                            </tbody>
                        </table><br /><br />
                        <button>
                            <Link to={'/admin/createmovies'}>
                                Add Movie
                    </Link>
                        </button>
                    </div>}
            </div>)
    }
}
const mapStateToProps = state => ({
    movies: state.movies
})
export default connect(mapStateToProps, { getMovies, delMovie, putMovieImage })(ListMovies);