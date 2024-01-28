import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import {
  ResumeFilterStoreData,
  ResumeFilterValue,
  ResumeFilterValues,
  UseFilterValuesCategory,
  UseFilterValuesReturn,
} from './filterStore.type'
import { FILTER_CATEGORIES } from '@/constants'

const initialFilterValue: ResumeFilterStoreData = {
  currentFilterCategory: FILTER_CATEGORIES.JOB_TITLE,
  filterMap: new Map(),
  searchValue: '',
}

export const useResumeFilterStore = create<ResumeFilterValues>()(
  immer(set => ({
    ...initialFilterValue,

    addFilterValue: value => {
      set(state => {
        const category = state.currentFilterCategory
        const filterValues = state.filterMap.get(category)
        const newFilterValues =
          filterValues && category !== FILTER_CATEGORIES.JOB_TITLE
            ? [...filterValues, value]
            : [value]

        state.filterMap.set(category, newFilterValues)
      })
    },
    removeFilterValue: removeValue => {
      set(state => {
        const category = state.currentFilterCategory
        const filterValues = state.filterMap.get(category)
        const newFilterValues = filterValues?.filter(
          filterValue => removeValue !== filterValue.value
        )

        newFilterValues && state.filterMap.set(category, newFilterValues)
      })
    },
    clearFilterValues: clearMode => {
      set(state => {
        if (clearMode === 'all') {
          state.filterMap = new Map()
        } else {
          state.filterMap.set(state.currentFilterCategory, [])
        }
      })
    },
    toggleFilterValueRequired: index => {
      set(state => {
        const category = state.currentFilterCategory
        const filterValue = state.filterMap.get(category)?.at(index)

        if (filterValue) {
          filterValue.required = !filterValue.required
        }
      })
    },
    changeSearchValue: searchValue => {
      set({ searchValue })
    },
    changeCurrentFilterCategory(currentFilterCategory) {
      set({ currentFilterCategory })
    },
  }))
)

export const useResumeFilterValues = <T extends UseFilterValuesCategory>(
  category: T
): UseFilterValuesReturn<T> => {
  const { currentFilterCategory, filterMap } = useResumeFilterStore(
    ({ currentFilterCategory, filterMap }) => ({
      currentFilterCategory,
      filterMap,
    })
  )

  if (category === 'current') {
    const values = filterMap.get(currentFilterCategory) ?? []
    return values as UseFilterValuesReturn<T>
  }

  const entries: [FILTER_CATEGORIES, ResumeFilterValue[]][] = Array.from(filterMap.entries())

  return entries as UseFilterValuesReturn<T>
}
