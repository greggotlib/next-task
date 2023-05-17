import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import dictionary from 'utils/dictionary'

test('renders Footer component correctly', () => {
  const { getByText } = render(<Footer />)
  const titleElement = getByText(dictionary.footer.title)
  const subTitleElement = getByText(dictionary.footer.subTitle)

  expect(titleElement).toBeInTheDocument()
  expect(subTitleElement).toBeInTheDocument()
})

test('renders social icons with correct href attributes', () => {
  render(<Footer />)

  const facebookIcon = screen.getByTestId('facebook')
  expect(facebookIcon).toHaveAttribute(
    'href',
    'https://www.facebook.com/NextInsuranceIL?mibextid=LQQJ4d'
  )

  const linkedinIcon = screen.getByTestId('linkedin')
  expect(linkedinIcon).toHaveAttribute(
    'href',
    'https://www.linkedin.com/company/nextinsurance/'
  )

  const twitterIcon = screen.getByTestId('twitter')
  expect(twitterIcon).toHaveAttribute(
    'href',
    'https://twitter.com/nextInsurance1'
  )

  const instagramIcon = screen.getByTestId('instagram')
  expect(instagramIcon).toHaveAttribute(
    'href',
    'https://www.instagram.com/nextinsurance/'
  )

  const youtubeIcon = screen.getByTestId('youtube')
  expect(youtubeIcon).toHaveAttribute(
    'href',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  )
})
