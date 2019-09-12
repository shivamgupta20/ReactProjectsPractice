import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from './store/actions/movieAction';
// import * as movies from './store/actions/movieAction';
import './Layouts/movies.css';
import Header from './header';

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.carouselImages = this.carouselImages.bind(this);
        this.state = { image1: "", image2: "", image3: "", index: 2 };
        this.props.getMovies();
        this.carouselClick = this.carouselClick.bind(this);
        // this.props.fetchMovies();
        // this.props.dispatch(getMovies());
    }

    componentWillReceiveProps(props) {
        if (!this.state.image1 && props.movies) {
            this.setState({
                ...this.state,
                image1: props.movies[0].image,
                image2: props.movies[1].image,
                image3: props.movies[2].image
            }, () => this.carouselImages());
        }
    }
    carouselClick(n) {
        this.setState({
            ...this.state,
            index: n - 1
        });
    }
    carouselImages = () => {
        this.intv = setInterval(() => {
            const length = this.props.movies.length;
            if (this.state.index < length - 1) {
                var ind = this.state.index + 1;
                this.setState({
                    ...this.state,
                    index: ind
                })
            }
            else
                this.setState({
                    ...this.state,
                    index: 0
                });
            if (this.state.index + 1 === length) {
                this.setState({
                    ...this.state,
                    image1: this.props.movies[this.state.index - 1].image,
                    image2: this.props.movies[this.state.index].image,
                    image3: this.props.movies[0].image
                });
            }
            else if (this.state.index === 0) {
                this.setState({
                    ...this.state,
                    image1: this.props.movies[length - 1].image,
                    image2: this.props.movies[this.state.index].image,
                    image3: this.props.movies[this.state.index + 1].image
                });
            }
            else {
                this.setState({
                    ...this.state,
                    image1: this.props.movies[this.state.index - 1].image,
                    image2: this.props.movies[this.state.index].image,
                    image3: this.props.movies[this.state.index + 1].image
                });
            }
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intv);
    }
    render() {
        return (
            <div>
                <Header />
                <div className="carousel">
                    <ul>
                        <li><img src={this.state.image1} alt="Image" /></li>
                        <li><img src={this.state.image2} alt="Image" /></li>
                        <li><img src={this.state.image3} alt="Image" /></li>
                    </ul>
                    <div className="dotPar">
                        <span className="dot" onClick={(e) => this.carouselClick(1)}></span>
                        <span className="dot" onClick={(e) => this.carouselClick(2)}></span>
                        <span className="dot" onClick={(e) => this.carouselClick(3)}></span>
                        <span className="dot" onClick={(e) => this.carouselClick(4)}></span>
                        <span className="dot" onClick={(e) => this.carouselClick(5)}></span>
                        <span className="dot" onClick={(e) => this.carouselClick(6)}></span>
                    </div>
                </div>

            </div>)
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         fetchMovies: (self) => {
//             dispatch(movies.getMovies())
//         }
//     }
// }
const mapStateToProps = (state) => ({
    movies: state.movies.MoviesData.moviesList
})
export default connect(mapStateToProps, { getMovies })(Movies);
// export default connect(mapStateToProps, mapDispatchToProps)(Movies);