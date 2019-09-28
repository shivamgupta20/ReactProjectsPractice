import React from 'react';
import SideNav from './sideNav';
import { connect } from 'react-redux';
import { getMovies } from './store/actions/movieAction';
import { postCImages, getCImages } from './store/actions/carouselImagesAction';

class AddCImages extends React.Component {
    constructor(props) {
        super(props);
        this.props.getCImages();
        this.props.getMovies();
        this.fieldUpdate = this.fieldUpdate.bind(this);
        this.fileUpdate = this.fileUpdate.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        this.state = { category: "", movieId: "", image: "" };
    }
    fieldUpdate(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }
    fileUpdate(e) {
        // const file = e.target.files[0];
        // const reader = new FileReader();
        // this.setState({
        //     ...this.state,
        //     image: file
        // })

        const self = this;
        const file = e.target.files[0];
        var reader = new FileReader();
        var img = "";
        reader.onloadend = function () {

            img = reader.result;
            self.setState({ image: img });
        }
        reader.readAsDataURL(file);
        this.setState({ image: img });

    }
    fileUpload() {
        console.log(this.state);
        this.props.postCImages(this.state);
    }
    render() {
        // console.log(this.props.cImage);
        //console.log(this.state)
        return (
            <div>
                <SideNav />
                <h1>Upload Carousel Images </h1>
                <div style={{ marginLeft: '160px' }}>
                    <label>Category:</label>
                    <select name="category" type="select" onChange={this.fieldUpdate}>
                        <option>Select..</option>
                        <option>Movies</option>
                        <option>Events</option>
                    </select><br />
                    <label>Movie:</label>
                    <select name="movieId" type="select" onChange={this.fieldUpdate}>
                        <option>Select..</option>

                        {this.props.movies &&
                            this.props.movies.map(mov =>
                                <option value={mov._id} key={mov._id}>{mov.title}</option>
                            )
                        }
                    </select><br />
                    <label>Image:</label>
                    <input type="file" onChange={this.fileUpdate}></input><br />
                    <button onClick={this.fileUpload}>Upload!</button>
                </div>
                <h1>Images</h1>
                {
                    this.props.cImage &&
                    this.props.cImage.carouselImages.map(img =>

                        <img src={img.image} style={{ width: '300px' }} alt="c-img" />
                    )

                }

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    movies: state.movies.MoviesData.moviesList,
    cImage: state.carouselImage.cImagesData.data
})
export default connect(mapStateToProps, { getMovies, postCImages, getCImages })(AddCImages);