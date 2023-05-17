import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'
import { type SearchBarProps } from './types'
import { type Movie } from 'components/movies/movie/types'

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

jest.mock('hooks/useDebounce', () => (value: string, delay: number) => value)

const mockSetSearchedMovies = jest.fn()

const setup = (props?: Partial<SearchBarProps>) => {
  const defaultProps: SearchBarProps = {
    movies: mockMovies,
    placeholder: 'Search',
    setSearchedMovies: mockSetSearchedMovies,
  }
  const mergedProps = { ...defaultProps, ...props }
  render(<SearchBar {...mergedProps} />)
}

beforeEach(() => {
  jest.resetAllMocks()
})

describe('SearchBar', () => {
  test('renders the search bar with input field and criteria', () => {
    setup()
    const inputElement = screen.getByPlaceholderText('Search')
    expect(inputElement).toBeInTheDocument()

    const criteriaRadioButtons = screen.getAllByRole('radio')
    expect(criteriaRadioButtons).toHaveLength(3)
  })

  test('updates searched movies based on input value and selected criteria', () => {
    setup()
    const inputElement = screen.getByPlaceholderText('Search')
    fireEvent.change(inputElement, { target: { value: 'Movie 1' } })

    expect(mockSetSearchedMovies).toHaveBeenCalledWith([mockMovies[0]])

    const ratingRadioButton = screen.getByDisplayValue('rating')
    fireEvent.click(ratingRadioButton)

    fireEvent.change(inputElement, { target: { value: '6' } })
    expect(mockSetSearchedMovies).toHaveBeenCalledWith([mockMovies[1]])
  })

  test('clears the search and resets searched movies when clear button is clicked', () => {
    setup()
    const inputElement = screen.getByPlaceholderText('Search')
    fireEvent.change(inputElement, { target: { value: 'Movie' } })

    const clearButton = screen.getByTestId('clear-search')
    fireEvent.click(clearButton)

    expect(inputElement).toHaveValue('')
    expect(mockSetSearchedMovies).toHaveBeenCalledWith(mockMovies)
  })
})
