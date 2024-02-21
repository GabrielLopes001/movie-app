import axios from 'axios'

import { apiKey } from '@/constants'

const apiBaseUrl = 'https://api.themoviedb.org/3/'

const trendingMoviesEndPoint = `${apiBaseUrl}trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndPoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndPoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`
const searchMovieEndPoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`

const movieDetailsEndPoint = (id) =>
  `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`

const movieCreditsEndPoint = (id) =>
  `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`

const similarMoviesEndPoint = (id) =>
  `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`

const personDetailsEndPoint = (id) =>
  `${apiBaseUrl}/person/${id}?api_key=${apiKey}`

const personMovies = (id) =>
  `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`

export const image500 = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null
export const image342 = (path) =>
  path ? `https://image.tmdb.org/t/p/w342${path}` : null
export const image185 = (path) =>
  path ? `https://image.tmdb.org/t/p/w185${path}` : null

type ApiCallProps = {
  endpoint: string
  params?: string
}

const apiCall = async ({ endpoint, params = [] }: ApiCallProps) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params || {},
  }

  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    console.log(error)
    return {}
  }
}

export const fetchTrendingMovies = () => {
  return apiCall({ endpoint: trendingMoviesEndPoint })
}
export const fetchUpcomingMovies = () => {
  return apiCall({ endpoint: upcomingMoviesEndPoint })
}
export const fetchTopRatedMovies = () => {
  return apiCall({ endpoint: topRatedMoviesEndPoint })
}
export const fetchMovieDetails = (id) => {
  return apiCall({ endpoint: movieDetailsEndPoint(id) })
}
export const fetchMovieCredits = (id) => {
  return apiCall({ endpoint: movieCreditsEndPoint(id) })
}
export const fetchSimilarMovies = (id) => {
  return apiCall({ endpoint: similarMoviesEndPoint(id) })
}
export const fetchPersonDetails = (id: string) => {
  return apiCall({ endpoint: personDetailsEndPoint(id) })
}
export const fetchPersonMovies = (id) => {
  return apiCall({ endpoint: personMovies(id) })
}
export const fetchSearchMovie = (params) => {
  return apiCall({ endpoint: searchMovieEndPoint, params })
}
