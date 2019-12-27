import React from 'react';
import { Link } from "react-router-dom";
import MovieDetail from "./moviedetail";
import { getMovie } from "./store/actions/movieAction";
import { connect } from "react-redux";

class UReview extends React.Component {
    componentDidMount() {
        this.props.getMovie(this.props.match.params.movid);
    }
    render() {
        if (!this.props.movie) {
            return (<h1>Loading...</h1>)
        }
        else {
            return (
                <div>
                    <MovieDetail movie={this.props.movie} ></MovieDetail>
                    <div className="abc" style={{ 'display': 'inline-block', 'width': '25%' }}>  {/*=>>>left panel */}
                    </div>
                    <div className="def" style={{ 'display': 'inline-block', 'width': '75%' }}>
                        <ul>
                            <Link to={`/movie/${this.props.match.params.movid}`}>
                                <li style={{ 'margin': '10px' }}>Summary</li>
                            </Link>
                            <Link to={`/movie/${this.props.match.params.movid}/ureview`}>
                                <li style={{ 'margin': '10px' }}>User Reviews</li>
                            </Link>
                            <Link to={`/movie/${this.props.match.params.movid}/creview`}>
                                <li style={{ 'margin': '10px' }}>Critics Reviews</li>
                            </Link>
                        </ul>
                        <h1>in user reviews</h1>
                    </div>

                </div>
            );
        }
    }
}
const mapStateToProps = state => ({
    movie: state.movies.movieData
})
export default connect(mapStateToProps, { getMovie })(UReview);