import { FolderList } from '@features/resumeMatcher'
import styled from '@emotion/styled'
import { Container as HeaderContainer, Right } from '@components/Header'
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

export const ContentContainer = styled(ScrollArea)({
  height: '100vh',
})

export const NoFolderSelectedContainer = styled.div({
  gridColumn: '2 / span 2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})
