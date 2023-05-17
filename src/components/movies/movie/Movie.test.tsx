import { render, screen, fireEvent } from '@testing-library/react'
import { type Movie } from './types'
import { Movie as MovieContent } from './index'

const mockMovie: Movie = {
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
}

describe('Movie', () => {
  test('renders movie details and opens modal on "Read More" click', () => {
    render(<MovieContent {...mockMovie} />)

    expect(screen.getByTestId('movie')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('read-more'))
    expect(screen.getByTestId('modal')).toBeInTheDocument()
  })
})
