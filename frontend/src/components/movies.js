import React from 'react';
import { connect } from 'react-redux';
import { getMovies, getMovieByCriteria } from './store/actions/movieAction';
import { getCImages } from './store/actions/carouselImagesAction';
import Carousel from './carousel';
import './Layouts/movies.css';
import Header from './header';
import { Link } from 'react-router-dom';
import TileData from './tiledata';
// import CheckboxGroup from 'react-checkbox-group';

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.langChange = this.langChange.bind(this);
        this.getMovieByLang = this.getMovieByLang.bind(this);

        this.state = {
            LangHindi: false,
            LangEng: false,
            LangTelgu: false,
            LangTamil: false,
            LangBengali: false,
            language: ""
        }
    }
    componentDidMount() {
        this.props.getCImages('Movies');
        this.props.getMovies();
    }
    getMovieByLang() {
        console.log(this.state);
        // this.props.getMovieByCriteria({ 'language': e.target.value })

    }
    langChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.checked
        });
        let lang = { language: e.target.value };
        let statelang = this.state.language;

        // if (e.target.checked === true) {
        //     this.setState(...this.state,
        //         {
        //             ...this.state.language,
        //             lang
        //         })
        // }
        // this.getMovieByLang();

    }

    render() {
        return (
            <div>
                <Header />
                {this.props.carouselImage &&
                    <Carousel data={this.props.carouselImage} />
                }
                <br />
                <div className="mov">
                    <div>
                        <ul>
                            <li><h3 style={{ 'color': '#333' }}>Movies</h3></li>
                            <li><Link className="link" to="">Now Showing</Link ></li>
                            <li><Link className="link" to="">Coming Soon</Link ></li>
                            <li><Link className="link" to="">Exclusive</Link ></li>
                        </ul>
                    </div>
                    <div className="searchPanel">
                        <div className="searchLang">
                            Select Language<br />
                            <input type="checkbox" name="LangHindi" checked={this.state.LangHindi} onChange={this.langChange} value="hindi" /> Hindi<br />
                            <input type="checkbox" name="LangEng" checked={this.state.LangEng} onChange={this.langChange} value="english" /> English<br />
                            <input type="checkbox" name="LangTelgu" checked={this.state.LangTelgu} onChange={this.langChange} value="telgu" /> Telgu<br />
                            <input type="checkbox" name="LangTamil" checked={this.state.LangTamil} onChange={this.langChange} value="tamil" /> Tamil<br />
                            <input type="checkbox" name="LangBengali" checked={this.state.LangBengali} onChange={this.langChange} value="bengali" /> Bengali<br />
                        </div>
                        <div className="searchGenre">


                        </div>
                    </div>
                    <div className="movies">
                        {this.props.movies &&
                            this.props.movies.moviesList.map(list =>
                                <div>
                                    <Link to={`/movie/${list._id}`}>
                                        <TileData data={list} />
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies.MoviesData,
    carouselImage: state.carouselImage.cImagesData.data
})
export default connect(mapStateToProps, { getCImages, getMovies, getMovieByCriteria })(Movies);