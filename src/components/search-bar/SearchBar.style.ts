import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-block-end: 20px;
  width: 600px;
`

export const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 16px;
`

export const DeleteIcon = styled.i`
  margin-inline-end: 8px;
  cursor: pointer;
  color: #999;
  display: flex;
  &:hover {
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    color: #000;
  }
`

export const RadioGroup = styled.div`
  display: flex;
  padding: 5px;
`

export const RadioButtonLabel = styled.div`
  text-transform: capitalize;
  font-size: 14px;
  display: flex;
`

export const RadioButtonInput = styled.input`
  margin: 0 5px;
  cursor: pointer;
`

export const CritiriaContainer = styled.div`
  border-radius: 5px;
  background-color: aliceblue;
`
