import { MovieGenresDTO } from './movie-genres-dto'

export type MovieDataDTO = {
  id: number
  poster_path: string
  duration: string
  title: string
  overview: string
  status: string
  release_date: string
  runtime: string
  genres: MovieGenresDTO[]
}
