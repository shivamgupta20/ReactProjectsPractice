import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcImages } from './cImagesAction'
import './movies.css'

export const ImageCarousel = (props) => {

    const dispatch = useDispatch();
    const carouselData = useSelector(state => state.cImagesReducer)
    const [carouselImages, setCImages] = useState({ image1: "", image2: "", image3: "", index: 0 })


    useEffect(() => {
        dispatch(getcImages({ category: 'Movies' }));
    }, [])

    useEffect(() => {
        if (carouselData.cImagesData)
            setCImages({
                image1: carouselData.cImagesData.carouselImages[0].image,
                image2: carouselData.cImagesData.carouselImages[1].image,
                image3: carouselData.cImagesData.carouselImages[2].image,
                index: 0
            })
        settingCarouselInterval();
    }, [carouselData])

    let settingCarouselInterval = () => {
        setInterval(() => {
            console.log(carouselData.cImagesData)

            if (carouselImages) {

                if (carouselImages.index + 1 !== carouselData.cImagesData.carouselImages.length)
                    setCImages({
                        ...carouselImages,
                        index: carouselImages.index + 1
                    });
                else
                    setCImages({
                        ...carouselImages,
                        index: 0
                    })
                if (carouselImages.index + 1 === carouselData.cImagesData.carouselImages.length)
                    setCImages({
                        ...carouselImages,
                        image1: carouselData.cImagesData.carouselImages[carouselImages.index - 1].image,
                        image2: carouselData.cImagesData.carouselImages[carouselImages.index].image,
                        image3: carouselData.cImagesData.carouselImages[0].image
                    });
                else if (carouselImages.index === 0)
                    setCImages({
                        ...carouselImages,
                        image1: carouselData.cImagesData.carouselImages[carouselData.cImagesData.carouselImages.length - 1].image,
                        image2: carouselData.cImagesData.carouselImages[carouselImages.index].image,
                        image3: carouselData.cImagesData.carouselImages[carouselImages.index + 1].image
                    });
                else
                    setCImages({
                        ...carouselImages,
                        image1: carouselData.cImagesData.carouselImages[carouselImages.index - 1].image,
                        image2: carouselData.cImagesData.carouselImages[carouselImages.index].image,
                        image3: carouselData.cImagesData.carouselImages[carouselImages.index + 1].image
                    });

            }
        }, 2000)

    }

    const slideImage = (n) => {
        if (carouselData.cImagesData) {
            if (n == "" || n == undefined)
                n = 0;
            // else
            // clearInterval(intv);
            setCImages({
                image1: carouselData.image1,
                image2: carouselData.image2,
                image3: carouselData.image3,
                index: n
            })

        }
    }

    return (
        carouselData.cImagesData &&
        <div style={{ 'overflow': 'hidden' }}>
            <div className="carousel" >
                <div className="sideimage" style={{ 'float': 'left' }}>
                    <img src={carouselImages.image1} alt="Carousel Img" style={{ 'width': '200%', 'left': '-100%' }} />
                </div>
                <div className="slidefullimage">
                    <img src={carouselImages.image2} alt="Carousel Img" style={{ 'width': '100%' }} />
                </div>
                <div className="sideimage" style={{ 'float': 'right' }}>
                    <img src={carouselImages.image3} alt="Carousel Img" style={{ 'width': '200%' }} />
                </div>
            </div>
            <div className="dotpanel">
                {
                    carouselData.cImagesData.carouselImages.map((dot, i) =>
                        <div className="dot" onClick={() => this.slideImage(i)} />
                    )
                }
            </div>

        </div>
    )



}
