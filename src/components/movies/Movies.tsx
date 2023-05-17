import { Movie as MovieContent } from 'components/movies/movie'
import { Container, NotFoundWrapper } from './Movies.style'
import { type MoviesProps } from './types'
import dictionary from 'utils/dictionary'
import { memo } from 'react'

const MovieList = ({ movies }: MoviesProps) => {
  const {
    movieList: { notFound },
  } = dictionary
  return (
    <Container data-testid="movies">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieContent
            key={movie.id}
            {...movie}
          />
        ))
      ) : (
        <NotFoundWrapper>{notFound}</NotFoundWrapper>
      )}
    </Container>
  )
}

const areEqual = (prevProp: MoviesProps, nextProp: MoviesProps) => {
  const prevMovies = prevProp.movies
  const nextMovies = nextProp.movies

  if (JSON.stringify(prevMovies) === JSON.stringify(nextMovies)) {
    return true
  }
  return false
}

export default memo(MovieList, areEqual)
