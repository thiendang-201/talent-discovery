import { FolderList, ResumeFilter, FileList } from '@features/resumeMatcher'
import styled from '@emotion/styled'
import { Container as HeaderContainer, Right } from '@components/Header'
import Button from '@components/Button'

export const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: '240px 1fr',
  gridTemplateRows: 'minmax(52px, max-content) minmax(52px, max-content) 1fr',
  gridTemplateAreas: `
    'folders header'
    'folders subHeader'
    'folders content'
  `,
})

export const StyledFolders = styled(FolderList)({
  gridArea: 'folders',
})

export const StyledHeader = styled(HeaderContainer)({
  gridArea: 'header',
  marginTop: '20px',
})

export const StyledHeaderRight = styled(Right)({
  display: 'flex',
  gap: '10px',
})

export const StyledSubHeader = styled(HeaderContainer)({
  gridArea: 'subHeader',
})

export const StyledFilter = styled(ResumeFilter)({
  gridArea: 'filter',
})

const Label = styled(Button)({
  ['input[type=file]']: {
    display: 'none',
  },
})

export const UploadButton = Label.withComponent('label')

export const ResumeList = styled(FileList)({
  gridArea: 'content',
})
