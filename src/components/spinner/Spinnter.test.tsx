import { render } from '@testing-library/react'
import Spinner from './Spinner'

test('renders Spinner component correctly', () => {
  const { getByTestId } = render(<Spinner />)
  const spinnerElement = getByTestId('spinner')

  expect(spinnerElement).toBeInTheDocument()
})
