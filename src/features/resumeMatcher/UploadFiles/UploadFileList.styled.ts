import { ScrollArea } from '@components/ScrollView'
import styled from '@emotion/styled'

export const FileListContainer = styled.div({
  h2: {
    paddingLeft: '24px',
    paddingBottom: '8px',
  },
})

export const FileList = styled.div({})

export const StyledScrollArea = styled(ScrollArea)(({ theme }) => ({
  maxHeight: '50vh',
  borderLeft: '1px solid',
  borderColor: theme.colors.slate6,
  padding: '24px',
  paddingTop: 0,
}))
