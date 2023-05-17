import React, { memo, useEffect, useState } from 'react'
import { type SearchBarProps, SearchCritiria } from './types'
import {
  DeleteIcon,
  Container,
  SearchInput,
  RadioGroup,
  RadioButtonInput,
  RadioButtonLabel,
  CritiriaContainer,
} from './SearchBar.style'
import { FaTimes } from 'react-icons/fa'
import { type Movie } from 'components/movies/movie/types'
import useDebounce from 'hooks/useDebounce'

const SearchBar = ({
  movies,
  placeholder,
  setSearchedMovies,
}: SearchBarProps) => {
  const [selectedCriteria, setSelectedCriteria] = useState<string>(
    SearchCritiria.title
  )
  const [searchText, setSearchText] = useState<string>('')
  const debouncedSearchText = useDebounce(searchText, 300)

  useEffect(() => {
    let filteredMovies: Movie[] = movies
    const index = selectedCriteria as keyof Movie

    if (!debouncedSearchText) {
      setSearchedMovies(movies)
      return
    }

    filteredMovies = filteredMovies.filter((movie: Movie) =>
      movie[index]
        .toString()
        .toLowerCase()
        .includes(debouncedSearchText.toLowerCase())
    )
    setSearchedMovies(filteredMovies)
  }, [debouncedSearchText])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const handleCriterionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSelectedCriteria(value)
  }

  const handleClearSearch = () => {
    setSearchText('')
    setSearchedMovies(movies)
  }

  return (
    <Container>
      <SearchInput
        placeholder={placeholder}
        onChange={handleSearch}
        value={searchText}
      />
      {searchText && (
        <DeleteIcon
          data-testid="clear-search"
          onClick={handleClearSearch}
        >
          <FaTimes />
        </DeleteIcon>
      )}
      <CritiriaContainer>
        <RadioGroup>
          {Object.keys(SearchCritiria).map((key) => (
            <RadioButtonLabel key={key}>
              <RadioButtonInput
                type="radio"
                value={key}
                checked={selectedCriteria === key}
                onChange={handleCriterionChange}
              />
              {key}
            </RadioButtonLabel>
          ))}
        </RadioGroup>
      </CritiriaContainer>
    </Container>
  )
}

const areEqual = (prevProp: SearchBarProps, nextProp: SearchBarProps) => {
  const prevMovies = prevProp.movies
  const nextMovies = nextProp.movies

  if (JSON.stringify(prevMovies) === JSON.stringify(nextMovies)) {
    return true
  }
  return false
}

export default memo(SearchBar, areEqual)
