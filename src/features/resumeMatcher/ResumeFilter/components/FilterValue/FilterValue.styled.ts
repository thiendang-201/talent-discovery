import styled from '@emotion/styled'
import { ResumeFilterValue } from '@features/resumeMatcher'

export const Container = styled.div<{ isSelected?: boolean; isRequired?: boolean }>(
  {
    display: 'flex',
    gap: '4px',
    padding: '8px',
    // paddingRight: '4px',
    transition: 'all 0.15s ease-in-out',
    alignItems: 'center',
    marginInline: '8px',
    marginBlock: '4px',
    borderRadius: '6px',
    border: '1px solid transparent',
  },
  ({ theme, isSelected }) => ({
    '&:hover': !isSelected && {
      backgroundColor: theme.colors.gray3,
    },

    cursor: isSelected ? 'default' : 'pointer',
  }),
  ({ theme, isRequired }) => {
    if (isRequired) {
      return {
        backgroundColor: theme.colors.iris3,
        border: `1px solid ${theme.colors.iris6}`,
      }
    }
  }
)

export const LeftBox = styled.div({
  marginRight: 'auto',
})

export const Title = styled.div({
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: '14px',
})

export const ToggleRequiredButton = styled.button<Pick<ResumeFilterValue, 'required'>>(
  ({ required, theme }) => ({
    borderRadius: '999px',
    fontSize: '10px',
    fontWeight: 500,
    lineHeight: '12px',
    display: 'flex',
    color: required ? theme.colors.iris9 : theme.colors.blue9,
    backgroundColor: required ? theme.colors.iris3 : theme.colors.blue3,
    border: `1px solid ${required ? theme.colors.iris5 : theme.colors.blue5}`,
    alignItems: 'center',
    marginTop: '2px',
    paddingInline: '2px 8px',
  })
)
