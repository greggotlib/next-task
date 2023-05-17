import {
  ModalOverlay,
  ModalContent,
  BackToList,
  Title,
  Duration,
  Rating,
  BackToListIcon,
  MovieCover,
  MovieDetails,
  MovideDetailsContainer,
  RatingIcon,
  Description,
  RatingContainer,
  BackToListTitle,
  SpinnerWrapper,
} from './Modal.style'
import dictionary from 'utils/dictionary'
import { type ModalProps } from './types'
import arrowIcon from 'assets/icons/backArrow.svg'
import ratingIcon from 'assets/icons/star.svg'
import { useState } from 'react'
import { Spinner } from 'components/spinner'

const TOP_RATING = '10'

const Modal = ({
  closeModal,
  runtime,
  title,
  rating,
  image,
  description,
}: ModalProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const {
    movie: { backToListLabel },
  } = dictionary

  const getRating = () => {
    return `${rating}/${TOP_RATING}`
  }

  const handleOnload = () => {
    setIsLoading(false)
  }

  return (
    <ModalOverlay data-testid="modal">
      <ModalContent>
        {isLoading && (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        )}
        <MovieCover
          onLoad={handleOnload}
          alt="movie-cover"
          src={image}
        ></MovieCover>
        <MovideDetailsContainer>
          <MovieDetails>
            <Title>{title}</Title>
            <Duration>{runtime}</Duration>
            {rating && (
              <RatingContainer>
                <RatingIcon src={ratingIcon} />
                <Rating>{getRating()}</Rating>
              </RatingContainer>
            )}
            <Description dangerouslySetInnerHTML={{ __html: description }} />
          </MovieDetails>
          <BackToList
            onClick={closeModal}
            data-testid="back-to-list"
          >
            <BackToListIcon src={arrowIcon} />
            <BackToListTitle>{backToListLabel}</BackToListTitle>
          </BackToList>
        </MovideDetailsContainer>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
