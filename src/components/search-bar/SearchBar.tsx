import React, { memo, useEffect, useState } from 'react'
import { type SearchBarProps, SearchCritiria } from './types'
import {
  DeleteIcon,
  SearchInput,
  RadioGroup,
  RadioButtonInput,
  RadioButtonLabel,
  CritiriaContainer,
  Wrapper,
  SearchContainer,
} from './SearchBar.style'
import { FaTimes } from 'react-icons/fa'
import { type Movie } from 'components/movies/movie/types'
import useDebounce from 'hooks/useDebounce'
import { handleDeepComparison } from 'utils/helpers'

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
    <Wrapper>
      <SearchContainer>
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
      </SearchContainer>
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
    </Wrapper>
  )
}

const areEqual = (prevProp: SearchBarProps, nextProp: SearchBarProps) => {
  return handleDeepComparison(prevProp.movies, nextProp.movies)
}

export default memo(SearchBar, areEqual)
