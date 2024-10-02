import styled from '@emotion/styled'
import { StyledNumOfSelectedProps } from './FilterCategory.type'
import Button from '@components/Button'

export const StyledNumOfSelected = styled.span<StyledNumOfSelectedProps>(({ theme, isActive }) => ({
  paddingInline: '3.6px',
  backgroundColor: isActive ? theme.colors.background : theme.colors.blue9,
  color: isActive ? theme.colors.blue9 : theme.colors.background,
  fontSize: '12px',
  lineHeight: '14.4px',
  borderRadius: '999px',
  display: 'inline-block',
  fontWeight: 400,
}))

export const StyledCategoryButton = styled(Button)({
  whiteSpace: 'nowrap',
  gap: '8px',
})
