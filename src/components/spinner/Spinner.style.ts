import styled, { keyframes } from 'styled-components'

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SpinnerWrapper = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top-color: #555;
  border-radius: 50%;
  animation: ${spinAnimation} 1s ease-in-out infinite;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
`
