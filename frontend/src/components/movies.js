import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from './store/actions/movieAction';
import { getCImages } from './store/actions/carouselImagesAction';
import Carousel from './carousel';
import './Layouts/movies.css';
import Header from './header';
import { Link } from 'react-router-dom';
import TileData from './tiledata';

class Movies extends React.Component {

    componentDidMount() {
        this.props.getCImages('Movies');
        this.props.getMovies();
    }


    render() {
        // console.log(this.props.movies)
        return (
            <div>
                <Header />
                {this.props.carouselImage &&
                    <Carousel data={this.props.carouselImage} />
                }
                <br />

                <div>
                    <ul>
                        <li><h3 style={{ 'color': '#333' }}>Movies</h3></li>
                        <li><Link className="link" to="">Now Showing</Link ></li>
                        <li><Link className="link" to="">Coming Soon</Link ></li>
                        <li><Link className="link" to="">Exclusive</Link ></li>
                    </ul>
                </div>

                <div>
                    {/*left search panel*/}
                </div>
                {this.props.movies &&
                    this.props.movies.moviesList.map(list =>
                        <div>
                            <Link to={`/movie/${list._id}`}>
                                <TileData data={list} />
                            </Link>
                        </div>
                    )}
            </div>)
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies.MoviesData,
    carouselImage: state.carouselImage.cImagesData.data
})
export default connect(mapStateToProps, { getCImages, getMovies })(Movies);