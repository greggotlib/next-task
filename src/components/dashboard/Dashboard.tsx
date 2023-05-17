import { Movies } from 'components/movies'
import dictionary from '../../utils/dictionary'
import { Container, SearchBarContainer, Title } from './Dashboard.style'
import { SearchBar } from 'components/search-bar'
import { fetchMovies } from 'api/moviesApi'
import { useState, useEffect } from 'react'
import { type Movie } from 'components/movies/movie/types'
import { Spinner } from 'components/spinner'

const Dashboard = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([])

  const {
    dashboard: { title },
    searchBar: { placeholder },
  } = dictionary

  useEffect(() => {
    async function fetchMoviesData() {
      const moviesData = await fetchMovies()
      setMovies(moviesData)
      setSearchedMovies(moviesData)
    }
    fetchMoviesData()
  }, [])

  return (
    <Container>
      <Title>{title}</Title>
      <SearchBarContainer>
        <SearchBar
          movies={movies}
          setSearchedMovies={setSearchedMovies}
          placeholder={placeholder}
        />
      </SearchBarContainer>
      {movies.length ? <Movies movies={searchedMovies} /> : <Spinner />}
    </Container>
  )
}

export default Dashboard
