import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from './store/actions/movieAction';
import './Layouts/movies.css';

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.props.getMovies();
    }
    render() {
        console.log(this.props.movies);
        return <div>
            <div className="mHeader">
                <label className="logo"> L O G O </label>
                <ul>
                    <li className="mHeaderOpt">Movies</li>
                    <li className="mHeaderOpt">Others</li>
                </ul>
            </div>



        </div>
    }


}

const mapStateToProps = (state) => ({
    movies: state.movies
})
export default connect(mapStateToProps, { getMovies })(Movies);