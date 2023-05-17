import { render } from '@testing-library/react'
import Header from './Header'
import nextMovies from 'assets/logos/next-movies.png'

test('renders Header component correctly', () => {
  const { getByRole } = render(<Header />)
  const logoElement = getByRole('img')

  expect(logoElement).toBeInTheDocument()
  expect(logoElement.getAttribute('src')).toBe(nextMovies)
})
