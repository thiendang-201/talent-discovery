import styled from '@emotion/styled'

const StyledButton = styled.button(
  {
    fontSize: '12px',
    fontWeight: 500,
    padding: '8px 10px',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 1,
  },
  ({ theme }) => ({
    color: theme.colors.slate1,
    backgroundColor: theme.colors.slate12,

    '&:hover': {
      opacity: 0.85,
    },

    '&:active': {
      backgroundColor: theme.colors.slate10,
    },
  })
)

export default StyledButton
