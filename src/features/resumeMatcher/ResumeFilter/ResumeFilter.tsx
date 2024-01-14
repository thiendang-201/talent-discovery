import { BiFilterAlt } from 'react-icons/bi'
import {
  Container,
  Header,
  Heading,
  SearchContainer,
  StyledScrollArea,
} from './ResumeFilter.styled'
import { ResumeFilterProps } from './ResumeFilter.type'
import { FilterCategoryList, FilterValues } from './components'
import { ChangeEvent, useCallback, useState } from 'react'
import { Input } from '@components/Input'
import { useResumeFilterStore } from '../stores'
import { SelectedFilterValues } from './components'
import { CATEGORY_LABEL_MAP } from '..'
import { Separator } from '@components/Separator'
import { IconButton } from '@components/Button'
import { PiArrowClockwiseBold } from 'react-icons/pi'

export function ResumeFilter({ className }: ResumeFilterProps) {
  const [searchCategoryValue, setSearchCategoryValue] = useState('')
  const currentFilterCategory = useResumeFilterStore(state => state.currentFilterCategory)
  const clearFilterValues = useResumeFilterStore(state => state.clearFilterValues)

  const changeSearchValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value

    setSearchCategoryValue(searchValue)
  }, [])

  const handleClearFilterValues = () => {
    clearFilterValues('all')
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
          <Input
            value={searchCategoryValue}
            placeholder={`Tìm kiếm ${CATEGORY_LABEL_MAP[currentFilterCategory]}`}
            onChange={changeSearchValue}
          />
        </SearchContainer>
        <SelectedFilterValues />
        <Separator />
        <FilterValues searchCategoryValue={searchCategoryValue} />
      </Container>
    </StyledScrollArea>
  )
}
