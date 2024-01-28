import { IconButton } from '@components/Button'
import { Input } from '@components/Input'
import { ScrollArea } from '@components/ScrollView'
import styled from '@emotion/styled'

export const StyledScrollArea = styled(ScrollArea)(({ theme }) => ({
  height: '100vh',
  borderLeft: '1px solid',
  borderColor: theme.colors.slate6,
}))

export const Container = styled.div(
  {
    paddingTop: '16px',
    height: '100vh',
    position: 'sticky',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    top: 0,
    right: 0,
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.background,
  })
)

export const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingInline: '16px',
  marginBottom: '16px',
})

export const Heading = styled.h6(({ theme }) => ({
  ...theme.headings.sm,
  display: 'flex',
  gap: '6px',
  alignItems: 'center',
}))

export const SearchContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  paddingInline: '16px',
  position: 'relative',
})

export const StyledAddKeywordBtn = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  right: '20px',
  transform: 'translateY(-50%)',
})

export const StyledInput = styled(Input)({
  '&:not(:placeholder-shown)': {
    paddingRight: '30px',
  },
})
