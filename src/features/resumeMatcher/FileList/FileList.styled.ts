import styled from '@emotion/styled'

export const GridView = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  padding: '24px',
  gap: '24px',
})
