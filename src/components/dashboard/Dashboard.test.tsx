import { render, screen } from '@testing-library/react'
import Dashboard from './Dashboard'
import { fetchMovies } from 'api/moviesApi'
import { type Movie } from 'components/movies/movie/types'

jest.mock('api/moviesApi')

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

describe('Dashboard', () => {
  test('renders loading spinner when movies are not loaded', () => {
    render(<Dashboard />)
    const spinnerElement = screen.getByTestId('spinner')
    expect(spinnerElement).toBeInTheDocument()
  })

  test('renders MovieList when movies are loaded', async () => {
    ;(fetchMovies as jest.Mock).mockResolvedValue(mockMovies)
    render(<Dashboard />)

    const movieListElement = await screen.findByTestId('movies')
    expect(movieListElement).toBeInTheDocument()
  })
})
