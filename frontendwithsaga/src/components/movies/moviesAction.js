import { GET_MOVIES, GET_CIMAGES } from '../../store/actionTypes'

export const getMovies = () => ({ type: GET_MOVIES })

export const getcImages = (data) => ({ type: GET_CIMAGES, data })
