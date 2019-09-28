import React from 'react';
import { connect } from 'react-redux';
import { getMovie } from './store/actions/movieAction';

class MovieDetail extends React.Component {
    componentDidMount() {
        console.log(this.props);
        this.props.getMovie();
    }

    render() {
        console.log(this.props.movie);
        return <div>in movie detail</div>
    }
}

const mapStateToProps = state => ({
    movie: state.movies.movieData
})
export default connect(mapStateToProps, { getMovie })(MovieDetail);