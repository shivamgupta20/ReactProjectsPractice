import React from 'react';
import './Layouts/layouts.css';
import { postMovie } from './store/actions/movieAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CreateMovies extends React.Component {
    constructor(props) {
        super(props);
        this.fieldUpdate = this.fieldUpdate.bind(this);
        this.createMovieReq = this.createMovieReq.bind(this);
        this.imageUpload = this.imageUpload.bind(this);
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
    fieldUpdate(e) {
        this.setState({
            movie: {
                ...this.state.movie,
                [e.target.id]: e.target.value
            }
        })
        console.log("e.target.value", e.target.value);
    }
    imageUpload(e) {
        const file = e.target.files[0];
        const formdata = new FormData();
        formdata.append('title', this.state.title);
        formdata.append('releaseDate', this.state.releaseDate);
        formdata.append('duration', this.state.duration);
        formdata.append('genre', this.state.genre);
        formdata.append('description', this.state.description);
        formdata.append('image', file, file.name);
    }
    createMovieReq(e) {
        e.preventDefault();
        this.props.postMovie(this.state.movie);
    }
    render() {
        return (
            <div>
                <form>
                    <label for="title" className="custom-label">Title: </label>
                    <input type="text" id="title" onChange={this.fieldUpdate}></input><br />
                    <label for="releaseDate" className="custom-label">Release Date:</label>
                    <input type="date" id="releaseDate" onChange={this.fieldUpdate}></input><br />
                    <label for="duration" className="custom-label">Duration:</label>
                    <input type="number" id="duration" onChange={this.fieldUpdate}></input><br />
                    <label for="genre" className="custom-label">Genre:</label>
                    <input type="text" id="genre" onChange={this.fieldUpdate}></input><br />
                    <label for="description" className="custom-label">Description:</label>
                    <textarea id="description" row="5" column="20" onChange={this.fieldUpdate}></textarea><br />
                    <input type="file" id="image" onChange={this.imageUpload}></input><br /><br />

                    <button onClick={this.createMovieReq}><Link to={'/admin/movies'}>Submit</Link></button>
                    <button><Link to={'/admin/movies'}>Cancel</Link></button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movie
})
export default connect(mapStateToProps, { postMovie })(CreateMovies);