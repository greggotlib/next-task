import { type Movie } from 'components/movies/movie/types'

export interface SearchBarProps {
  placeholder: string
  movies: Movie[]
  setSearchedMovies: (arg0: Movie[]) => void
}

export enum SearchCritiria {
  title = 'title',
  rating = 'rating',
  released = 'released',
}
