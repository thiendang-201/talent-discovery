import styled from '@emotion/styled'

export const Container = styled.div({
  width: '324px',
})

export const ContentContainer = styled.div({
  display: 'flex',
  flexWrap: 'nowrap',
  gap: '14px',
  overflow: 'auto',
  paddingInline: '16px',
  paddingBottom: '12px',
  marginBottom: '-12px',

  /* IE and Edge */
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})
