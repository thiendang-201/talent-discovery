import { FILTER_CATEGORIES } from '@features/resumeMatcher'

export type FilterCategoryProps = {
  label: string
  value: FILTER_CATEGORIES
  numOfSelected: number
  isActive: boolean
  onSelected: (category: FILTER_CATEGORIES) => void
}

export type StyledNumOfSelectedProps = {
  isActive: boolean
}
