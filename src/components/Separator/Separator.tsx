import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import styled from '@emotion/styled'

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <StyledSeparator ref={ref} decorative={decorative} orientation={orientation} {...props} />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

const StyledSeparator = styled(SeparatorPrimitive.Root)(
  ({ theme }) => ({
    flexShrink: 0,
    backgroundColor: theme.colors.slate6,
  }),
  ({ orientation }) =>
    orientation === 'horizontal'
      ? {
          height: '1px',
          width: '100%',
        }
      : {
          height: '100%',
          width: '1px',
        }
)

export { Separator }
