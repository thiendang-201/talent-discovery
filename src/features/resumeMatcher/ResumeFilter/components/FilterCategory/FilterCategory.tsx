import { FilterCategoryProps } from './FilterCategory.type'
import { StyledCategoryButton, StyledNumOfSelected } from './FilterCategory.styled'

export function FilterCategory({
  label,
  isActive,
  value,
  numOfSelected,
  onSelected,
}: FilterCategoryProps) {
  const handleClick = () => {
    onSelected(value)
  }

  return (
    <StyledCategoryButton
      color={isActive ? 'primary' : 'gray'}
      variant={isActive ? 'solid' : 'clear'}
      onClick={handleClick}
    >
      {label}
      {numOfSelected > 0 && (
        <StyledNumOfSelected isActive={isActive}>{numOfSelected}</StyledNumOfSelected>
      )}
    </StyledCategoryButton>
  )
}
