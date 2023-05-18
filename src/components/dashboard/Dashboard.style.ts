import styled from 'styled-components'

export const Container = styled.div`
  background-color: #00d7ff;
  padding: 114px 50px 0;
  @media (max-width: 768px) {
    padding: 114px 0 0;
  }
`

export const Title = styled.div`
  text-align: center;
  font: normal normal bold 80px/66px Arial;
  letter-spacing: 0px;
  color: #000000;
  text-transform: uppercase;
  opacity: 1;
  margin: 0;
  margin-block-end: 95px;
  @media (max-width: 768px) {
    margin-block-end: 45px;
    font: normal normal bold 27px/25px Arial;
  }
`

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const SpinnerContainer = styled.div`
  margin: 30px 0;
`
