import styled from '@emotion/styled'

export const Container = styled.div({
  display: 'grid',
  gridTemplateAreas: `"sidebar content"`,
  gridTemplateColumns: '64px 1fr',
  width: '100%',
  height: '100%',
})

export const InnerContent = styled.div(
  {
    gridArea: 'content',
  },
  props => ({
    backgroundColor: props.theme.colors.background,
  })
)
