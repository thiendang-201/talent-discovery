import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { StyledProgressIndicator, StyledProgressRoot } from './Progress.styled'

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ value, ...props }, ref) => (
  <StyledProgressRoot ref={ref} {...props}>
    <StyledProgressIndicator style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
  </StyledProgressRoot>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
