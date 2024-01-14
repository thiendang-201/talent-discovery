import { FILTER_CATEGORIES } from '@/constants'

export type ResumeFilterProps = {
  className?: string
}

export type FilterCategoryState = {
  searchValue: string
  activeCategory: FILTER_CATEGORIES
}
