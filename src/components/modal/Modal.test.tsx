import React from 'react'
import { render, screen } from '@testing-library/react'
import Modal from './Modal'

describe('Modal', () => {
  const mockProps = {
    closeModal: jest.fn(),
    runtime: '120 mins',
    title: 'Test Movie',
    rating: '8.5',
    image: 'test-image.jpg',
    description: 'Test description',
  }

  test('renders the modal with correct content', () => {
    render(<Modal {...mockProps} />)

    // Assert that the modal elements are rendered with the correct content
    expect(screen.getByText(mockProps.title)).toBeInTheDocument()
    expect(screen.getByText(mockProps.runtime)).toBeInTheDocument()
    expect(screen.getByText(`${mockProps.rating}/10`)).toBeInTheDocument()
    expect(screen.getByAltText('movie-cover')).toHaveAttribute(
      'src',
      mockProps.image
    )
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()
  })

  test('calls closeModal function when back to list button is clicked', () => {
    render(<Modal {...mockProps} />)

    // Simulate a click on the back to list button
    screen.getByTestId('back-to-list').click()

    // Assert that the closeModal function is called
    expect(mockProps.closeModal).toHaveBeenCalled()
  })
})
