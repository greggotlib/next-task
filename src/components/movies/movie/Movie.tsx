import dictionary from 'utils/dictionary'
import {
  Container,
  Cover,
  ReadMoreIcon,
  ReadMore,
  Title,
  DetailsContianer,
  Icon,
  Rating,
  ButtonTitle,
  RatingContainer,
  Wrapper,
} from './Movie.style'
import { type MovieProps } from './types'
import ratingIcon from 'assets/icons/star.svg'
import arrowIcon from 'assets/icons/arrow.svg'
import { useState } from 'react'
import { Modal } from 'components/modal'

const Movie = ({
  image,
  title,
  rating,
  runtime,
  largeimage,
  synopsis,
  released,
}: MovieProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    movie: { readMoreLabel },
  } = dictionary

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Container data-testid="movie">
      <DetailsContianer>
        <Cover src={image} />
        <Title>
          {title} ({released})
        </Title>
        {isModalOpen && (
          <Modal
            {...{
              title,
              rating,
              runtime,
              description: synopsis,
              image: largeimage,
              closeModal: handleCloseModal,
            }}
          />
        )}
      </DetailsContianer>
      <RatingContainer>
        {rating && (
          <Wrapper>
            <Icon src={ratingIcon} />
            <Rating>{rating}</Rating>
          </Wrapper>
        )}
        <ReadMore
          data-testid="read-more"
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          <ButtonTitle>{readMoreLabel}</ButtonTitle>
          <ReadMoreIcon src={arrowIcon} />
        </ReadMore>
      </RatingContainer>
    </Container>
  )
}

export default Movie
