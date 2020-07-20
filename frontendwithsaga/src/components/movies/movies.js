import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, getcImages } from './moviesAction';
import ImageCarousel from './imageCarousel';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';


export const Movies = (props) => {
    const dispatch = useDispatch()
    const moviesData = useSelector(state => state.moviesReducer)
    const cImagesData = useSelector(state => state.cImagesReducer)

    useEffect(() => {
        dispatch(getMovies())
        dispatch(getcImages())
    }, [])

    return (<div>
        <div id="carousel">
            {cImagesData.cImagesData &&
                <ImageCarousel data={cImagesData} />
            }
        </div>
        <div id="movieDetails">

        </div>
    </div>)


}

