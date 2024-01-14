import { CATEGORY_OPTIONS, useResumeFilterStore } from '@features/resumeMatcher'
import { FilterCategory } from '../FilterCategory'
import { Container, ContentContainer } from './FilterCategoryList.styled'

export function FilterCategoryList() {
  const currentFilterCategory = useResumeFilterStore(state => state.currentFilterCategory)
  const filterMap = useResumeFilterStore(state => state.filterMap)
  const changeFilterCategory = useResumeFilterStore(state => state.changeCurrentFilterCategory)

  return (
    <Container>
      <ContentContainer>
        {CATEGORY_OPTIONS.map(category => (
          <FilterCategory
            numOfSelected={filterMap.get(category.value)?.length ?? 0}
            isActive={category.value == currentFilterCategory}
            onSelected={changeFilterCategory}
            key={category.value}
            {...category}
          />
        ))}
      </ContentContainer>
    </Container>
  )
}
