import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 15px 94px;
  width: 251px;
  text-align: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    15px 15px 55px
  }
`

export const DetailsContianer = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-end: 18px;
`

export const Cover = styled.img`
  border-radius: 5px;
`

export const Title = styled.div`
  text-align: left;
  font: normal normal normal 30px/31px Georgia;
  letter-spacing: -0.6px;
  color: #000000;
  text-transform: capitalize;
  opacity: 1;
  margin-block-start: 20px;
`

export const Wrapper = styled.div`
  display: flex;
  margin-block-end: 19px;
  align-items: flex-start;
`

export const ReadMore = styled.button`
  justify-content: space-between;
  padding: 10px 13px;
  width: 100%;
  display: flex;
  border: 1px solid #000000;
  border-radius: 100px;
  opacity: 1;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    background-color: #fffff0;
  }
`

export const Rating = styled.div`
  text-align: left;
  font: normal normal normal 25px/31px Arial;
  letter-spacing: -0.5px;
  color: #000000;
  text-transform: capitalize;
  opacity: 1;
  margin-inline-start: 6px;
`

export const ButtonTitle = styled.div``
export const ContentContainer = styled.div``

export const RatingContainer = styled.div``

export const Icon = styled.img``

export const ReadMoreIcon = styled.img``
