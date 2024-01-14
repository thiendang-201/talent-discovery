import { FolderList } from '@features/resumeMatcher'
import styled from '@emotion/styled'
import { Container as HeaderContainer, Right } from '@components/Header'
import Button from '@components/Button'
import { ScrollArea } from '@components/ScrollView'

export const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: '240px 1fr 324px',
})

export const StyledFolders = styled(FolderList)({})

export const StyledHeader = styled(HeaderContainer)({
  marginTop: '20px',
})

export const StyledHeaderRight = styled(Right)({
  display: 'flex',
  gap: '10px',
})

export const StyledSubHeader = styled(HeaderContainer)({})

const Label = styled(Button)({
  ['input[type=file]']: {
    display: 'none',
  },
})

export const UploadButton = Label.withComponent('label')

export const ContentContainer = styled(ScrollArea)({
  height: '100vh',
})
