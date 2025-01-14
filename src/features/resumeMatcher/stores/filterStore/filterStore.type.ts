import { FILTER_CATEGORIES } from '@/constants'

export type ResumeSortBy = 'name' | 'matchScore'

export type ResumeFilterValue = {
  value: string
  required: boolean
}

export type ResumeFilterStoreData = {
  currentFilterCategory: FILTER_CATEGORIES
  filterMap: Map<FILTER_CATEGORIES, ResumeFilterValue[]>
  searchValue: string
}

export type ResumeFilterStoreActions = {
  addFilterValue: (value: ResumeFilterValue) => void
  removeFilterValue: (value: string) => void
  clearFilterValues: (clearMode: 'all' | 'current') => void
  toggleFilterValueRequired: (index: number) => void
  changeSearchValue: (value: string) => void
  changeCurrentFilterCategory: (value: FILTER_CATEGORIES) => void
}

export type ResumeFilterValues = ResumeFilterStoreData & ResumeFilterStoreActions

export type UseFilterValuesCategory = 'current' | 'all'

export type UseFilterValuesReturn<T> = T extends 'current'
  ? ResumeFilterValue[]
  : [FILTER_CATEGORIES, ResumeFilterValue[]][]
