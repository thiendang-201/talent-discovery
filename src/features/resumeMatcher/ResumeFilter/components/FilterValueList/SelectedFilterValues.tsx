import {
  CATEGORY_LABEL_MAP,
  useResumeFilterStore,
  useResumeFilterValues,
} from '@features/resumeMatcher'
import { SelectedFilterValue } from '../FilterValue'
import { Header, StyledTitle } from './FilterValueList.styled'
import { Separator } from '@components/Separator'
import { IconButton } from '@components/Button'
import { PiArrowClockwiseBold } from 'react-icons/pi'

export function SelectedFilterValues() {
  const currentFilterCategory = useResumeFilterStore(state => state.currentFilterCategory)
  const clearFilterValues = useResumeFilterStore(state => state.clearFilterValues)
  const selectedFilterValues = useResumeFilterValues('current')

  const isSelectedFilterValuesEmpty = selectedFilterValues.length === 0

  const handleClearFilterValues = () => {
    clearFilterValues('current')
  }

  return isSelectedFilterValuesEmpty ? null : (
    <>
      <Separator />
      <div>
        <Header>
          <StyledTitle>{CATEGORY_LABEL_MAP[currentFilterCategory]} đã chọn</StyledTitle>
          <IconButton color='gray' variant='soft' size='small' onClick={handleClearFilterValues}>
            <PiArrowClockwiseBold size={14} />
          </IconButton>
        </Header>
        <div>
          {selectedFilterValues.map((value, index) => (
            <SelectedFilterValue key={value.value} {...value} index={index} />
          ))}
        </div>
      </div>
    </>
  )
}
