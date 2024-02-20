import { MovieGenresDTO } from './movie-genres-dto'

export type MoviesDataDTO = {
  id?: string
  title?: string
  posterPath?: string
  overview?: string
  status?: string
  runtime?: string
  genres?: MovieGenresDTO[]
  releaseDate?: string
}
