import { render, screen } from '@testing-library/react'
import MovieList from './Movies'
import { type Movie } from './movie/types'
import dictionary from 'utils/dictionary'

const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'Movie 1',
    image: '',
    synopsis: 'blablabla',
    rating: '5',
    type: 'movie',
    released: '2002',
    runtime: '1h5m',
    largeimage: '',
    unogsdate: new Date('2020-06-18'),
  },
  {
    id: '2',
    title: 'Movie 2',
    image: '',
    synopsis: 'blablabla2',
    rating: '6',
    type: 'movie',
    released: '2007',
    runtime: '1h10m',
    largeimage: '',
    unogsdate: new Date('2020-06-18'),
  },
]

describe('MovieList', () => {
  test('renders the list of movies', () => {
    render(<MovieList movies={mockMovies} />)
    const moviesContainer = screen.getByTestId('movies')
    expect(moviesContainer).toBeInTheDocument()
  })

  test('renders "not found" message when no movies are provided', () => {
    const {
      movieList: { notFound },
    } = dictionary
    render(<MovieList movies={[]} />)
    expect(screen.getByText(notFound)).toBeInTheDocument()
  })
})
