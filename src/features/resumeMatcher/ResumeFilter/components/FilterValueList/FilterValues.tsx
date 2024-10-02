import {
  CATEGORY_LABEL_MAP,
  useResumeFilterStore,
  useResumeFilterValues,
} from '@features/resumeMatcher'
import { FilterValue } from '../FilterValue'
import { useMemo } from 'react'
import { Header, StyledTitle } from './FilterValueList.styled'
import { useKeywords } from '@api/resume'
import { LoaderWrapper } from '@components/LoaderWrapper'

type FilterValuesProps = {
  searchCategoryValue: string
}

export function FilterValues({ searchCategoryValue }: FilterValuesProps) {
  const currentFilterCategory = useResumeFilterStore(state => state.currentFilterCategory)
  const selectedValues = useResumeFilterValues('current')
  const { data: keywords = [], isLoading } = useKeywords({
    search_value: searchCategoryValue,
    keyword_type: currentFilterCategory,
  })

  const filterValueOptions = useMemo(() => {
    return keywords.filter(
      keyword =>
        !selectedValues.find(
          selectedValue => selectedValue.value.toLowerCase() === keyword.keyword_value.toLowerCase()
        )
    )
  }, [keywords, selectedValues])

  return (
    <div>
      <Header>
        <StyledTitle>{`Danh sách ${CATEGORY_LABEL_MAP[currentFilterCategory]}`}</StyledTitle>
      </Header>
      <LoaderWrapper isLoading={isLoading} isEmpty={filterValueOptions.length === 0}>
        {filterValueOptions.map(keyword => (
          <FilterValue value={keyword.keyword_value} key={keyword.keyword_value} />
        ))}
      </LoaderWrapper>
    </div>
  )
}
