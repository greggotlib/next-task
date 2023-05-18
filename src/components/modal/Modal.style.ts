import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  display: flex;
  padding: 49px 134px 50px 139px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 1360px;
  height: 690px;

  @media (max-width: 768px) {
    /* Change flex-direction to column for mobile screens */
    flex-direction: column;
    width: 253px;
    height: fit-content;
    padding: 18px 19px;
  }
`

export const BackToList = styled.button`
  justify-content: space-between;
  padding: 10px 13px;
  width: 100%;
  display: flex;
  border: 1px solid #000000;
  border-radius: 100px;
  opacity: 1;
  background-color: transparent;
  cursor: pointer;
  width: 260px;
  &:hover {
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    background-color: #fffff0;
  }
  @media (max-width: 768px) {
    width: auto;
  }
`

export const Title = styled.div`
  text-align: left;
  font: normal normal bold 45px/31px Arial;
  letter-spacing: 0px;
  color: #000000;
  text-transform: uppercase;
  opacity: 1;
  margin-block-end: 10px;
  line-height: 45px;
  @media (max-width: 768px) {
    font: normal normal bold 30px/31px Arial;
    margin-block-end: 7px;
  }
`

export const Duration = styled.div`
  text-align: left;
  font: normal normal normal 25px/31px Arial;
  letter-spacing: -0.5px;
  color: #000000;
  text-transform: lowercase;
  margin-block-end: 24px;
  @media (max-width: 768px) {
    font: normal normal normal 20px/31px Arial;
    margin-block-end: 12px;
  }
`

export const Rating = styled.div`
  text-align: left;
  font: normal normal normal 25px/21px Arial;
  letter-spacing: 0px;
  color: #000000;
  text-transform: capitalize;
  opacity: 1;
  margin-inline-start: 10px;
  @media (max-width: 768px) {
    font: normal normal normal 18px/19px Arial;
  }
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-block-end: 28px;
  @media (max-width: 768px) {
    font: normal normal normal 18px/19px Arial;
    margin-block-end: 22px;
  }
`

export const Description = styled.div`
  text-align: left;
  font: normal normal normal 30px/31px Georgia;
  letter-spacing: -0.6px;
  color: #000000;
  text-transform: lowercase;
  opacity: 1;
  @media (max-width: 768px) {
    margin-block-end: 23px;
    font: normal normal normal 16px/17px Georgia;
  }
`

export const MovideDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-inline-start: 143px;
  @media (max-width: 768px) {
    margin-inline-start: 0;
    margin-block-start: 6px;
  }
`

export const RatingIcon = styled.img`
  @media (max-width: 768px) {
    width: 23px;
    height: 22px;
  }
`

export const BackToListIcon = styled.img``

export const BackToListTitle = styled.div``

export const MovieCover = styled.img`
  border-radius: 5px;
`
export const MovieDetails = styled.div``

export const SpinnerWrapper = styled.div`
  align-self: center;
`
