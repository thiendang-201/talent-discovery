import styled from '@emotion/styled'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { ProgressProps } from './Progress'

export const StyledProgressRoot = styled(ProgressPrimitive.Progress)(({ theme }) => ({
  position: 'relative',
  height: '6px',
  width: '100%',
  overflow: 'hidden',
  borderRadius: '999px',
  background: theme.colors.gray5,
}))

export const StyledProgressIndicator = styled(ProgressPrimitive.Indicator)<ProgressProps>(
  ({ theme, color }) => ({
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: color ?? theme.colors.blue9,
    transition: 'all 0.3s ease-in-out',
    borderRadius: '999px',
  })
)
