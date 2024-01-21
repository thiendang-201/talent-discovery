import styled from '@emotion/styled'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

export const StyledScrollAreaRoot = styled(ScrollAreaPrimitive.Root)({
  position: 'relative',
  overflow: 'hidden',
})

export const StyledViewport = styled(ScrollAreaPrimitive.Viewport)({
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
  maxHeight: 'inherit',
})

export const StyledScrollAreaScrollbar = styled(ScrollAreaPrimitive.ScrollAreaScrollbar)(
  {
    display: 'flex',
    userSelect: 'none',
    touchAction: 'none',
    transitionProperty:
      'color, background-color, border-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms',
    padding: '1px',
  },
  ({ orientation }) => {
    if (orientation === 'vertical') {
      return {
        height: '100%',
        width: '8px',
        borderLeft: '1px solid transparent',
      }
    }

    return {
      height: '8px',
      flexDirection: 'column',
      borderTop: '1px solid transparent',
    }
  }
)

export const StyledScrollAreaThumb = styled(ScrollAreaPrimitive.ScrollAreaThumb)(({ theme }) => ({
  position: 'relative',
  flex: 1,
  borderRadius: '999px',
  backgroundColor: theme.colors.gray6,
}))
