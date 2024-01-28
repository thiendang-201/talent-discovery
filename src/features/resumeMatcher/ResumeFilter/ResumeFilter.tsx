import { BiFilterAlt } from 'react-icons/bi'
import { FiPlus } from 'react-icons/fi'
import {
  Container,
  Header,
  Heading,
  SearchContainer,
  StyledAddKeywordBtn,
  StyledInput,
  StyledScrollArea,
} from './ResumeFilter.styled'
import { ResumeFilterProps } from './ResumeFilter.type'
import { FilterCategoryList, FilterValues } from './components'
import { ChangeEvent, useCallback, useState } from 'react'
import { useResumeFilterStore } from '../stores'
import { SelectedFilterValues } from './components'
import { CATEGORY_LABEL_MAP } from '..'
import { Separator } from '@components/Separator'
import { IconButton } from '@components/Button'
import { PiArrowClockwiseBold } from 'react-icons/pi'
import { useDebounce } from '@uidotdev/usehooks'
import { FILTER_CATEGORIES, REG_MULTI_WHITESPACE } from '@/constants'

export function ResumeFilter({ className }: ResumeFilterProps) {
  const [searchCategoryValue, setSearchCategoryValue] = useState('')
  const currentFilterCategory = useResumeFilterStore(state => state.currentFilterCategory)
  const addFilterValue = useResumeFilterStore(state => state.addFilterValue)
  const clearFilterValues = useResumeFilterStore(state => state.clearFilterValues)
  const trimmedSearchValue = searchCategoryValue.trim().replace(REG_MULTI_WHITESPACE, '')
  const debouncedSearchValue = useDebounce(trimmedSearchValue, 500)

  const changeSearchValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value
    setSearchCategoryValue(searchValue)
  }, [])

  const handleClearFilterValues = () => {
    clearFilterValues('all')
  }

  const handleAddKeyword = () => {
    setSearchCategoryValue('')
    addFilterValue({
      value: trimmedSearchValue,
      required: currentFilterCategory === FILTER_CATEGORIES.JOB_TITLE,
    })
  }

  return (
    <StyledScrollArea>
      <Container className={className}>
        <Header>
          <Heading>
            <BiFilterAlt size={20} /> Bộ lọc
          </Heading>
          <IconButton color='gray' variant='soft' size='small' onClick={handleClearFilterValues}>
            <PiArrowClockwiseBold size={14} />
          </IconButton>
        </Header>
        <FilterCategoryList />
        <SearchContainer>
          <StyledInput
            value={searchCategoryValue}
            placeholder={`Tìm kiếm ${CATEGORY_LABEL_MAP[currentFilterCategory]}`}
            onChange={changeSearchValue}
          />
          {trimmedSearchValue && (
            <StyledAddKeywordBtn size='small' onClick={handleAddKeyword}>
              <FiPlus size={14} />
            </StyledAddKeywordBtn>
          )}
        </SearchContainer>
        <SelectedFilterValues />
        <Separator />
        <FilterValues searchCategoryValue={debouncedSearchValue} />
      </Container>
    </StyledScrollArea>
  )
}
