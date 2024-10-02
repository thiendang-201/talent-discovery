import Button from '@components/Button'
import * as Header from '@components/Header'
import { RiFolderUserLine, RiFileUploadFill } from 'react-icons/ri'
import { StyledHeader, StyledHeaderRight } from '../ResumeListPage.styled'
import { useTheme } from '@emotion/react'
import { useUploadResumesStore } from '@features/resumeMatcher'
import { useLocation } from 'react-router-dom'

export function ResumeListPageHeader() {
  const { colors } = useTheme()
  const { state } = useLocation()
  const openUploadResumeDialog = useUploadResumesStore(state => state.openUploadResumeDialog)

  return (
    <>
      <StyledHeader>
        <Header.Left>
          <RiFolderUserLine color={colors.slate12} size={22} />
        </Header.Left>
        <Header.Heading>{state.folder_name}</Header.Heading>
        <StyledHeaderRight>
          <Button onClick={openUploadResumeDialog}>
            Tải lên <RiFileUploadFill size={16} />
          </Button>
        </StyledHeaderRight>
      </StyledHeader>
    </>
  )
}
