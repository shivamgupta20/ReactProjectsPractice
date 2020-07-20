import React from 'react';
import './movies.css';

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.slideImage = this.slideImage.bind(this);
        this.state = ({
            image1: "",
            image2: "",
            image3: "",
            index: 0
        });
    }

    componentDidMount() {
        console.log(this.props.data)
        this.setState({
            image1: this.props.data.cImagesData.carouselImages[0].image,
            image2: this.props.data.cImagesData.carouselImages[1].image,
            image3: this.props.data.cImagesData.carouselImages[2].image,
            index: 0
        }, this.slideImage.bind(this)
        );
    }
    componentWillUnmount() {
        clearInterval(this.intv);
    }
    slideImage(n) {
        if (n == "" || n == undefined)
            n = 0;
        else
            clearInterval(this.intv);
        this.setState({
            ...this.state,
            index: n
        })
        this.intv = setInterval(() => {

            if (this.state.index + 1 !== this.props.data.cImagesData.carouselImages.length)
                this.setState({
                    ...this.state,
                    index: this.state.index + 1
                });
            else
                this.setState({
                    ...this.state,
                    index: 0
                })
            if (this.state.index + 1 === this.props.data.cImagesData.carouselImages.length)
                this.setState({
                    ...this.state,
                    image1: this.props.data.cImagesData.carouselImages[this.state.index - 1].image,
                    image2: this.props.data.cImagesData.carouselImages[this.state.index].image,
                    image3: this.props.data.cImagesData.carouselImages[0].image
                });
            else if (this.state.index === 0)
                this.setState({
                    ...this.state,
                    image1: this.props.data.cImagesData.carouselImages[this.props.data.cImagesData.carouselImages.length - 1].image,
                    image2: this.props.data.cImagesData.carouselImages[this.state.index].image,
                    image3: this.props.data.cImagesData.carouselImages[this.state.index + 1].image
                });
            else
                this.setState({
                    ...this.state,
                    image1: this.props.data.cImagesData.carouselImages[this.state.index - 1].image,
                    image2: this.props.data.cImagesData.carouselImages[this.state.index].image,
                    image3: this.props.data.cImagesData.carouselImages[this.state.index + 1].image
                });


        }, 2000)
    }
    render() {
        return (
            <div style={{ 'overflow': 'hidden' }}>
                <div className="carousel" >
                    <div className="sideimage" style={{ 'float': 'left' }}>
                        <img src={this.state.image1} alt="Carousel Img" style={{ 'width': '200%', 'left': '-100%' }} />
                    </div>
                    <div className="slidefullimage">
                        <img src={this.state.image2} alt="Carousel Img" style={{ 'width': '100%' }} />
                    </div>
                    <div className="sideimage" style={{ 'float': 'right' }}>
                        <img src={this.state.image3} alt="Carousel Img" style={{ 'width': '200%' }} />
                    </div>
                </div>
                <div className="dotpanel">
                    {
                        this.props.data.cImagesData.carouselImages.map((dot, i) =>
                            <div className="dot" onClick={() => this.slideImage(i)} />
                        )
                    }
                </div>

            </div>
        )
    }
}

export default ImageCarousel;